import { User } from '../models';

const userControlller = {};

// POST
userControlller.post = (req, res) => {
  const { name, photo, username, password } = req.body;

  const user = new User({
    name,
    photo,
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
        message: err,
      });
    });
};

export default userControlller;
