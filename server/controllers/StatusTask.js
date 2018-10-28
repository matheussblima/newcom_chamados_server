import { StatusTask } from '../models';

const statusTaskController = {};

statusTaskController.post = (req, res) => {
    const { name } = req.body;

    const statusTask = new StatusTask({ name });

    statusTask.save().then((newStatusTask) => {
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

statusTaskController.getAll = (req, res) => {
    StatusTask.find({}).then((status) => {
        res.status(200).json({
            success: true,
            data: status,
        });
    }).catch((err) => {
        res.status(500).json({
            message: err,
        });
    });
};

export default statusTaskController;