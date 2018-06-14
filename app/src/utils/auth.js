import {firebaseInstance, redis} from '../common';

export const injectAuthUser = async (obj, token) => {
  try {
    obj.auth = await firebaseInstance.auth().verifyIdToken(token);
    obj.user = (await redis.hgetall(`user:${obj.auth.user_id}`));
  } catch (e) {
    obj.auth = null;
    obj.user = null;
  }
};
