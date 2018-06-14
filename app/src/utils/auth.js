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
