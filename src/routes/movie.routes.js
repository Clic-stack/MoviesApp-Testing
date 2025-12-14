import { getAll, create, getOne, remove, update, setGenres, setActors, setDirectors } from '../controllers/movie.controllers.js'
import {Router} from 'express'

const movieRouter = Router()

movieRouter.route('/movies')
    .get(getAll)
    .post(create)

movieRouter.route('/movies/:id')
    .get(getOne)
    .delete(remove)
    .put(update)

movieRouter.post('/movies/:id/genres', setGenres)
movieRouter.post('/movies/:id/actors', setActors)
movieRouter.post('/movies/:id/directors', setDirectors)

export default movieRouter