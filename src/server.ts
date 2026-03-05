import express from 'express';
import { bookRouter } from './routes/book.routes.js';

const PORT = 3000
const app = express();

app.listen(PORT, () => console.log(`Server running at ${PORT}`))

app.use('/books', bookRouter)

app.use((req, res) => {
    res.status(404).json({
        message: 'Not found'
    })
})