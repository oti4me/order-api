import { firebase } from '../config/firebase';
import Unauthorised from '../utils/errors/Unauthorized';

/**
 * Checks if the user is authorized to perform requested action
 *
 * @param req
 * @param res
 * @param next
 *
 * @return {Promise<auth.DecodedIdToken|*>}
 */
const authorize = async (req, res, next) => {
  const { authorization } = req.headers;
  if (authorization) {
    return firebase.auth()
      .verifyIdToken(authorization)
      .then((user) => {
        req.user = user;
        return next();
      }).catch((error) => {
        next(error);
      });
  }
  return next(new Unauthorised('Not authorised to view this resource'));
};

export default authorize;
