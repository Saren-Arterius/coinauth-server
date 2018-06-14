import express from 'express';

import {CONFIG} from '../config';
import {redis} from '../common';

const router = express.Router();

const checkSession = async (req, res, next) => {
  req.playerUUID = await redis.get(`session:uuid:${req.cookies.session_id}`);
  if (!req.playerUUID) {
    let err = new Error('NOT_FOUND');
    err.status = 404;
    return next(err);
  }
  return next();
};

router.get('/login/:session_id', (req, res, next) => {
  res.cookie('session_id', req.params.session_id);
  res.redirect(`${CONFIG.entry_path}/login`);
});

router.get('/login', checkSession, async (req, res, next) => {
  if (!req.auth) {
    return res.render('login');
  }
  if (!req.user) {
    let uuidAlreadyRegistered = await redis.exists(`uuid:${req.playerUUID}`);
    if (uuidAlreadyRegistered) {
      let err = new Error('WRONG_ACCOUNT');
      err.status = 403;
      return next(err);
    }
    await Promise.all([
      redis.hset(`user:${req.auth.user_id}`, 'player_uuid', req.playerUUID),
      redis.hset(`user:${req.auth.user_id}`, 'email', req.auth.email),
      redis.hset(`user:${req.auth.user_id}`, 'created_at', Date.now()),
      redis.set(`uuid:${req.playerUUID}`, req.auth.user_id)
    ]);
    req.user = (await redis.hgetall(`user:${req.auth.user_id}`));
  }
  if (req.user.player_uuid !== req.playerUUID) {
    let err = new Error('WRONG_ACCOUNT');
    err.status = 403;
    return next(err);
  }
  await redis.hset(`user:${req.auth.user_id}`, 'last_login', Date.now());
  let playerIP = req.headers['cf-connecting-ip'] || req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  await redis.hset(`user:${req.auth.user_id}`, 'last_ip', playerIP);
  return res.redirect(`${CONFIG.entry_path}/work`);
});

router.get('/work', checkSession, async (req, res, next) => {
  if (!req.user) {
    let err = new Error('LOGIN_REQURIED');
    err.status = 401;
    return next(err);
  }
  if (req.user.player_uuid !== req.playerUUID) {
    let err = new Error('WRONG_ACCOUNT');
    err.status = 403;
    return next(err);
  }
  let alreadyAuthed = await redis.exists(`session:auth:${req.cookies.session_id}`);
  if (alreadyAuthed) {
    await redis.setex(`session:auth:${req.cookies.session_id}`, 60, 1);
    await redis.expire(`session:uuid:${req.cookies.session_id}`, 60);
  }
  return res.render('work');
});

router.get('/logout', (req, res, next) => {
  return res.render('logout');
});

module.exports = router;
