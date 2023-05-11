const express = require("express");

const router = express.Router();

const getUser = require("../controllers/getUser.controllers");
router.get("/getUser", getUser.getUser);

// all info for this user :
router.get("/getUser/:id", getUser.getUserid);

// check if user exist user id exist in chats and if have chats !
const getUserChatsController = require("../controllers/getUserChatsController");
router.get("/getUserChatsController/:userId", getUserChatsController.getUserChats);


// we take the info from specific chat 
const getChatWithMessages = require("../controllers/getChatWithMessages.Controller");
router.get("/getChatWithMessages/:chatId", getChatWithMessages.getMessages);

// add new user 
const postUser = require("../controllers/postUser.controller");
router.post("/postUser", postUser.postUser);
// add new chat 
const postChat = require('../controllers/postChatRoom.controllers');
router.post("/postChat",postChat.postChat);
// add new message 
const postMessage = require('../controllers/postMessage.controllers');
router.post("/postMessage",postMessage.postMessage);

module.exports = router;
      