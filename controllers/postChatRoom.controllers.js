const connection = require("../database/connection");

const postChatController = {
  postChat: async (req, res) => {
    try {
      const userIds = req.body.users;

      // Sortează ID-urile de utilizatori în ordine alfabetică
        const sortedUserIds = userIds.sort();
      // Verifică dacă există deja un chat între acești utilizatori
      const existingChat = await connection
        .collection("chats")
        .where("users", "==", sortedUserIds)
        .get();

      if (!existingChat.empty) {
        // Returnează ID-ul chat-ului existent
          const existingChatId = existingChat.docs[0].id;
                console.log("exist this chat");

        res.status(200).json({
          chatId: existingChatId,
        });
        return;
      }
                console.log("new chat ");

      // New Chat 
      const chatData = {
        users: sortedUserIds,
      };

      const docRef = await connection.collection("chats").add(chatData);
      const chatId = docRef.id;

      res.status(200).json({
        chatId: chatId,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: "Error creating chat!",
      });
    }
  },
};

module.exports = postChatController;
 