const express = require('express')
const { getMessages, postMessage } = require('../controllers/messages.controller.js');
const messagesRouter = express.Router();
messagesRouter.get('/', getMessages)
messagesRouter.post('/', postMessage)


module.exports = {
    messagesRouter
};