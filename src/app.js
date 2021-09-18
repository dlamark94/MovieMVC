import express,{ json } from 'express'; 
import morgan from 'morgan';

//Importing movies
import projectRoutes from './routes/movies';

//Initialization 
const app = express(); 

//Middlewares 
app.use(morgan('dev'));
app.use(json());

//Routes 
app.use('/api/movies', projectRoutes);


export default app; 