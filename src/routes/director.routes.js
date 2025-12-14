import { getAll, create, getOne, remove, update } from '../controllers/director.controllers.js'
import {Router} from 'express'

const directorRouter = Router()

directorRouter.route('/directors')
    .get(getAll)
    .post(create)

directorRouter.route('/directors/:id')
    .get(getOne)
    .delete(remove)
    .put(update)

export default directorRouter