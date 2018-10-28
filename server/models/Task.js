import mongoose, { Schema } from 'mongoose';

const TaskSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String },
    _status: { type: Schema.ObjectId, ref: 'StatusTask' },
    _customer: { type: Schema.ObjectId, ref: 'Customer' },
    _comment: { type: Schema.ObjectId, ref: 'CommentTask' },
    _equipment: [{ type: Schema.ObjectId, ref: 'Equipment' }],
    validityData: { type: Date, required: true },
    isDeleted: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now() },
});

const Task = mongoose.model('Task', TaskSchema);
export default Task;