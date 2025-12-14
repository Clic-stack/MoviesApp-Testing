import { Router } from "express";
import actorRouter from "./actor.routes.js";
import directorRouter from "./director.routes.js";
import genreRouter from "./genre.routes.js";
import movieRouter from "./movie.routes.js";

const router = Router()

router.get("/", (req, res) => {
    res.json({ message: "Welcome to the API" })
})

router.use(actorRouter)
router.use(directorRouter)
router.use(genreRouter)
router.use(movieRouter)

export default router