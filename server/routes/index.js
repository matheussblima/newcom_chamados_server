import User from './User';
import Task from './Task';
import StatusTask from './StatusTask';

const loadAllRoutes = (app) => {
    app.use('/api', User);
    app.use('/api', Task);
    app.use('/api', StatusTask);
}

export default loadAllRoutes;
