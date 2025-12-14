import { getAll, create, getOne, remove, update } from '../controllers/actor.controllers.js'
import {Router} from 'express'

const actorRouter = Router()

actorRouter.route('/actors')
    .get(getAll)
    .post(create)

actorRouter.route('/actors/:id')
    .get(getOne)
    .delete(remove)
    .put(update)

export default actorRouter