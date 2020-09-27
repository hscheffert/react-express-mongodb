const User = require('../models/user');
const HttpUtil = require('../utils/http-utils.js');
const USERS = 'users';
  
exports.create = async (req, res) => {
  console.log('user-controller: Create user', req.body);
  const { db } = req;

  HttpUtil.validatePostRequest(req);

  try {
    const user = new User(req.body.firstName, req.body.lastName, req.body.email, req.body.isActive);

    await db.collection(USERS).insert(user, (error, result) => {
      if (error) throw error;
      return res.send({ _id: result.insertedId, ...user });
    });
  } catch (error) {
    HttpUtil.handleError(res, error);
  }
};

exports.getAll = async (req, res) => {
  const { db } = req;

  try {
    const users = await db.collection(USERS).find();
    return res.send(users);
  } catch (error) {
    HttpUtil.handleError(res, error);
  }
};

exports.delete = async (req, res) => {
  console.log('user-controller: Delete user with id', req.params.id);
  const { db } = req;

  try {
    // TODO: this is supposed to be deleteOne, but that doesn't work?
    await db.collection(USERS).remove({ _id: req.params.id }, (error, result) => {
      if (error) throw error;
      return res.send(result.deletedCount === 1);
    });
  } catch (error) {
    HttpUtil.handleError(res, error);
  }
}