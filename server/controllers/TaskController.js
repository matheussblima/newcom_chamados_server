import { Task } from '../models';

const taskController = {};

taskController.post = (req, res) => {
  const {
    name,
    description,
    statusId,
    customerId,
    equipmentId,
    employeeId,
    userId,
    validityDate,
  } = req.body;

  const task = new Task({
    name,
    description,
    _status: statusId,
    _customer: customerId,
    _equipment: equipmentId,
    _employee: employeeId,
    _createdBy: userId,
    validityDate,
  });

  task
    .save()
    .then((newTask) => {
      res.status(200).json({
        success: true,
        data: newTask,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: err,
      });
    });
};

taskController.getAll = (req, res) => {
  Task.find({})
    .populate('_createdBy', 'name')
    .populate('_customer', 'name')
    .populate('_equipment', 'name')
    .populate('_status', 'name')
    .populate('_employee', 'name')
    .then((task) => {
      res.status(200).json({
        success: true,
        data: task,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: err,
      });
    });
};

export default taskController;
