import res from "express/lib/response";
import Movies from "../models/movies";

export async function getMovies(req, res) {
  
    let where = {}; 

    const director = req.query.director; 
    const name = req.query.name;
    const distribution = req.query.distribution;

    console.log(director); 
    console.log(name); 
    console.log(distribution);

    if(name){
        where.name = name;

    }

    if(distribution){
        where.distribution = distribution;

    }

    if(director){
        where.director = director; 
    }
    console.log('Esto es un error');
    console.log(where);

    try {
    const movies = await Movies.findAll({where});
    res.json({
      data: movies,
    });
  } catch (error) {
    console.log(error);
  }
}

export async function createMovie(req, res) {
  const { name, director, distribution, rating } = req.body;
  try {
    let newMovie = await Movies.create(
      {
        name,
        director,
        distribution,
        rating,
      },
      {
        fields: ["name", "director", "distribution", "rating"],
      }
    );
    if (newMovie) {
      return res.json({
        message: "Pelicula Creada Satisfactoriamente",
        data: newMovie,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Algo estuvo mal",
      data: {},
    });
  }
}

////export async function getOneDirector(req,res){
//    const {director} = req.params; 
//   const movies = await Movies.findOne({
//        where: {
//            director    
//        }
//    });
//    res.json(director);
// };

export async function deleteMovie(req,res){
    const {id} = req.params; 
    const deleteRowMovie = await Movies.destroy({
        where: {
            id
        }
    });
    res.json({
        message: 'Movie deleted succesfully',
        count: deleteRowMovie
    });
};

export async function updateMovie(req,res){
    const {id} = req.params;
    const {name, director, distribution, rating }  = req.body;

   const movies = await Movies.findAll({
        attributes: ['id', 'name', 'director', 'distribution', 'rating'],
        where: {
            id
        }
    });
    if(movies.lenght > 0){
        movies.forEach(async movies => {
            await movies.update({
                name,
                director, 
                distribution,
                rating
            });
        })
    }

    return res.json({
        message: 'Movie Updated Succesfully',
        data:movies
    })

}