import { Router} from 'express'; 
const router = Router(); 

import {createMovie, getMovies, deleteMovie, updateMovie} from '../controllers/movies.controller';


// /api/movies/
router.post('/', createMovie );
router.get('/', getMovies);


//api/movies/:moviesID
//router.get('/:id', getOneDirector);
router.delete('/:id', deleteMovie);
router.put('/:id',updateMovie );


export default router; 