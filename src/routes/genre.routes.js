import { getAll, create, getOne, remove, update } from '../controllers/genre.controllers.js'
import {Router} from 'express'

const genreRouter = Router()

genreRouter.route('/genres')
    .get(getAll)
    .post(create)

genreRouter.route('/genres/:id')
    .get(getOne)
    .delete(remove)
    .put(update)

export default genreRouter