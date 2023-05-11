const connection = require('../database/connection');

const userCollection =connection.collection("users");
  
const getUserController = {
  getUser: async (req, res) => {
    try {
      userCollection
        .get()
        .then((snapshot) => {
          // A snapshot contains the following information:
          // Documents: A list of documents from the collection.
          // Metadata: Additional information about the snapshot, such as the existence of changes, the time of the last update, etc.

          const data = [];
          snapshot.forEach((doc) => {
            data.push({ id: doc.id, ...doc.data() });
          });

          res.json(data);
        })
        .catch((error) => {
          console.error("Error getting messages:", error);
          res.status(500).json({ error: "Failed to retrieve messages" });
        });

      //    res.json({
      //      data: messages,
      //    });
    } catch (error) {
      console.log(error);
    }
  },

  //     getUserid: async (req, res) => {
  //     try {
  //       const userId = req.params.id;

  //       const userDoc = await userCollection.doc(userId).get();
  //       if (!userDoc.exists) {
  //         res.status(404).json({ error: "User not found" });
  //         return;
  //       }

  //       const userData = userDoc.data();

  //       res.json({
  //         idUser: userId,
  //         ...userData,
  //       });
  //     } catch (error) {
  //       console.error("Error retrieving user:", error);
  //       res.status(500).json({ error: "Failed to retrieve user" });
  //         }

  //   }

  getUserid: async (req, res) => {
    try {
      const userId = req.params.id;

      const userDoc = await userCollection.doc(userId).get();
      if (!userDoc.exists) {
        res.status(404).json({ error: "User not found" });
        return;
      }

      const userData = userDoc.data();

      res.json({
        idUser: userId,
        ...userData,
      });
    } catch (error) {
      console.error("Error retrieving user:", error); 
      res.status(500).json({ error: "Failed to retrieve user" });
    }
  },
};
module.exports = getUserController;
