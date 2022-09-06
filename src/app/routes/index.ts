import App from '../../app';
import MainRoutes from './MainRoutes';


export default (app:any): void => {
    app.use(MainRoutes);
}