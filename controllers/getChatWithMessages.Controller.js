const connection = require("../database/connection");

const getChatWithMessages = {
  getMessages: async (req, res) => {
    try {
      const chatId = req.params.chatId;
      console.log(chatId ,"aici");

      const messagesSnapshot = await connection
        .collection("chats")
        .doc(chatId)
        .collection("messages")
        .orderBy("createdAt")
        .get();

      const messages = [];

      messagesSnapshot.forEach((doc) => {
        const message = doc.data();
        message.id = doc.id; 
        messages.push(message);
      });

      res.status(200).json(messages);
    } catch (error) {
      console.log(error);
      res.status(500).json({ 
        message: "Error retrieving messages!", 
      });
    }
  },
};

module.exports = getChatWithMessages;
