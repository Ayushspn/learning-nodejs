const { friends } = require('../models/friends.model.js');

function getFriends(req, res) {
     console.log('Fetching all friends', friends);
     res.json(friends);
}

function postFriend(req, res) {
     console.log(req.body)
     const newFriend = { name: req.body.name, id: friends.length + 1 };
     friends.push(newFriend);
     res.json(newFriend);
}

function getFriendById(req, res){
        const friendId = parseInt(req.params.friendId, 10);
        const friend = friends.find(f => f.id === friendId);
        res.json(friend || { error: 'Friend not found' });
      }

module.exports = {
     getFriends,
     postFriend,
     getFriendById
};