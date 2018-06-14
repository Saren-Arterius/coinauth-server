import express from 'express';

import {CONFIG} from '../config';
import {redis} from '../common';

const router = express.Router();

const checkSession = async (req, res, next) => {
  req.playerUUID = await redis.get(`session:${req.cookies.session_id}`);
  if (!req.playerUUID) {
    let err = new Error('NOT_FOUND');
    err.status = 404;
    throw err;
  }
  next();
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
    await redis.hset(`user:${req.auth.user_id}`, 'player_uuid', req.playerUUID);
    await redis.hset(`user:${req.auth.user_id}`, 'email', req.auth.email);
    req.user = (await redis.hgetall(`user:${req.auth.user_id}`));
  }
  if (req.user.playerUUID !== req.playerUUID) {
    let err = new Error('WRONG_ACCOUNT');
    err.status = 403;
    throw err;
  }
  await redis.hset(`user:${req.auth.user_id}`, 'last_login', Date.now());
  let playerIP = req.headers['cf-connecting-ip'] || req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  await redis.hset(`user:${req.auth.user_id}`, 'last_ip', playerIP);
  return res.redirect(`${CONFIG.entry_path}/work`);
});

router.get('/work', checkSession, async (req, res, next) => {
  if (req.user.playerUUID !== req.playerUUID) {
    let err = new Error('WRONG_ACCOUNT');
    err.status = 403;
    throw err;
  }
  res.render('work');
});

module.exports = router;
