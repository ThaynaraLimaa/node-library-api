import express from "express";

const router = express.Router();

router.get('/', (req, res) => {
    res.send('I will give you some books, soon...')
})

export { router as bookRouter };