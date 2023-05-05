import express from 'express';
import userRoutes from './routes/userRoutes.js';
import bodyParser from "body-parser";

const app = express();
const PORT = 5000;

app.use('/', userRoutes);

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`)
});
