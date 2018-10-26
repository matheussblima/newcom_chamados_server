import { User } from '../models';

const userControlller = {};

// POST
userControlller.post = (req, res) => {
  const { username, password } = req.body;

  const user = new User({
    username,
    password,
  });

  user
    .save()
    .then((newUser) => {
      res.status(200).json({
        success: true,
        data: newUser,
      });
    })
    .catch((err) => {
      res.status(500).json({
        mensagem: err,
      });
    });
};

export default userControlller;
