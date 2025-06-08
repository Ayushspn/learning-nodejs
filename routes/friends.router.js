const express = require('express')
const { getFriends, postFriend, getFriendById } = require('./../controllers/friends.controller.js');
const friendsRouter = express.Router();
friendsRouter.get('/', getFriends)
friendsRouter.post('/', postFriend)
friendsRouter.get('/:friendId', getFriendById);

module.exports = {
    friendsRouter
};