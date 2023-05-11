const connection = require("../database/connection");


const getUserChatsController = {
  getUserChats: async (req, res) => {
    try {
      const userId = req.params.userId;

      const chatsSnapshot = await connection
        .collection("chats")
        .where("usersId", "array-contains", userId)
        .get();

      const chats = [];

      chatsSnapshot.forEach((doc) => {
        const chat = doc.data();
        chat.id = doc.id;

        // we verify if user exist in chat !
        if (chat.usersId.includes(userId)) {
          chats.push(chat.id);
        }
      });

      res.status(200).json(chats);
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: "Error retrieving user chats!",
      });
    }
  },
};

module.exports = getUserChatsController;
