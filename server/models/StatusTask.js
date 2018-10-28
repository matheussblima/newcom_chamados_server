import mongoose, { Schema } from 'mongoose';

const StatusTaskSchema = new Schema({
    name: { type: String, required: true },
    createdAt: { type: Date, default: Date.now() },
});

const StatusTask = mongoose.model('StatusTask', StatusTaskSchema);
export default StatusTask;
