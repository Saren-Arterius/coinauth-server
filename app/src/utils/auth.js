import {firebaseInstance, redis} from '../common';

export const injectAuthUser = async (obj, token) => {
  try {
    obj.auth = await firebaseInstance.auth().verifyIdToken(token);
    obj.user = (await redis.hgetall(`user:${obj.auth.user_id}`));
    if (!Object.keys(obj.user).length) {
      obj.user = null;
    }
  } catch (e) {
    obj.auth = null;
    obj.user = null;
  }
};

export const checkSession = async (req, res, next) => {
  req.playerUUID = await redis.get(`session:uuid:${req.cookies.session_id}`);
  if (!req.playerUUID) {
    let err = new Error('NOT_FOUND');
    err.status = 404;
    return next(err);
  }
  return next();
};

export const checkValidUser = (req, res, next) => {
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
  return next();
};

