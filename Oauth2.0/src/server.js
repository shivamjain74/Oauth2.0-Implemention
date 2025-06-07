
import express from 'express'
import { fileURLToPath } from 'url';
import axios from 'axios';
import path from 'path';
import authRoute from './routes/authroutes.js';
import dotenv from 'dotenv';
dotenv.config();

console.log(process.env.PORT)
const app = express();
const PORT =   process.env.PORT|| 5000;

// EJS setup
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Render the login page
app.get('/', (req, res) => {
    res.render('index');
});

app.use('/auth',authRoute);


app.listen(PORT, () => {
	console.log(`Backend running at http://localhost:${PORT}`);
});
