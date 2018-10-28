import { StatusTask } from '../models';

const statusTaskControllers = {};

statusTaskControllers.post = (req, res) => {
    const { name } = req.body;

    const StatusTask = new StatusTask({ name });

    StatusTask.save().then((newStatusTask) => {
        res.status(200).json({
            success: true,
            data: newStatusTask,
        });
    }).catch((err) => {
        res.status(500).json({
            message: err,
        });
    });
};

export default statusTaskControllers;