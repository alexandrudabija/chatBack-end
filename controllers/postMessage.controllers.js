const connection = require("../database/connection");

const postMessageController = {
  postMessage: async (req, res) => {
    try {
      const chatId = req.body.chatId;
        const senderId = req.body.senderId;
        const recipientId = req.body.recipientId;
      const message = req.body.message;
      const createdAt = new Date();

      const messageData = {
        chatId: chatId,
          senderId: senderId,
        recipientId:recipientId,
        message: message,
        createdAt: createdAt,
      };

      const messageRef = await connection
        .collection("chats")
        .doc(chatId)
        .collection("messages")
        .add(messageData);

      const messageId = messageRef.id;

      res.status(200).json({
        messageId: messageId, 
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: "Error posting message!",
      });
    }
  },
};

module.exports = postMessageController;
