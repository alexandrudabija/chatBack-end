const connection = require("../database/connection");
const userCollection = connection.collection("users");


const postUserController = {

    postUser: async (req, res) => {
        try {

            const user = {
                name: req.body.name,
                photo: req.body.photo
            }
const docRef = await userCollection.add(user);
            const idUser = docRef.id;
            console.log(idUser);
  res.status(200).json({
    idUser: idUser,
  });
        }

catch(error) {
        console.log(error);
        res.status(500).json({
            message: "Error saving post for USer !"
        });
    }

}

}


module.exports = postUserController;
