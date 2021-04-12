import IRoute from '../interfaces/Route';
import HomePage from '../pages/Home';

const routes: IRoute[] = [
    {
        path: '/',
        name: 'Home Page',
        component: HomePage,
        exact: true
    },
    {
        path: '/query=:query',
        name: 'Home Page',
        component: HomePage,
        exact: true
    }
];

export default routes;  