import mongoose, { Schema } from 'mongoose';

const CommentTaskSchema = new Schema({
    comment: { type: String, required: true },
    _user: { type: Schema.ObjectId, ref: 'User' },
    createdAt: { type: Date, default: Date.now() },
});

const CommentTask = mongoose.model('CommentTask', CommentTaskSchema);
export default CommentTask;