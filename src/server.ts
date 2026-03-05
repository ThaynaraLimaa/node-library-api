import express from 'express';

const PORT = 3000
const app = express();

app.listen(PORT, () => console.log(`Server running at ${PORT}`))

app.use((req, res) => {
    res.status(404).json({
        message: 'Not found'
    })
})