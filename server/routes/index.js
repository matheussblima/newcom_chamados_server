import User from './User';
import Task from './Task';

const loadAllRoutes = (app) => {
    app.use('/api', User);
    app.use('/api', Task);
}

export default loadAllRoutes;
