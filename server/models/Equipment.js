import mongoose, { Schema } from 'mongoose';

const EquipmentSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String },
  _customer: { type: Schema.ObjectId, ref: 'Customer', required: true },
  _task: [{ type: Schema.ObjectId, ref: 'Task' }],
  isDeleted: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now() },
});

const Equipment = mongoose.model('Equipment', EquipmentSchema);
export default Equipment;
