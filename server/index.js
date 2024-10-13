import express from 'express';
import dotenv from 'dotenv';  // Import dotenv properly
import cors from 'cors';
import Routes from './routes/index.js'

// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000; // Fallback to 5000 if PORT is not set

 app.use(cors());
 app.use(express.json())

 app.use(Routes)

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
