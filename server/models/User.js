import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    minlength: [5, 'User must be 5 caracteres or more.'],
  },
  password: {
    type: String,
    required: true,
    minlength: [8, 'Password must be 8 caracters or more.'],
  },
  isDeleted: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now() },
});

const User = mongoose.model('User', userSchema);
export default User;
