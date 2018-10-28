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
        validityDate } = req.body;

    const Task = new Task({
        name,
        description,
        _status: statusId,
        _customer: customerId,
        _equipment: equipmentId,
        _employee: employeeId,
        _createdBy: userId,
        validityDate
    });

    Task.save().then((newTask) => {
        res.status(200).json({
            success: true,
            data: newTask,
        });
    }).catch((err) => {
        res.status(500).json({
            message: err,
        });
    });
};

export default taskController;