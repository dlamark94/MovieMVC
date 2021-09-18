import Sequelize from 'sequelize';
import { sequelize } from '../database/database';


const Movies = sequelize.define('movies', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    name: {
        type: Sequelize.TEXT
    }, 
    director: {
        type: Sequelize.TEXT
    },
    distribution: {
        type: Sequelize.TEXT
    },
    rating: {
        type: Sequelize.INTEGER
    }
}, {
    timestamps: false
});

export default Movies;