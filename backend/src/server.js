import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import routes from './Routes/noteRoutes.js';
import { connectDB } from './config/db.js';
import rateLimiter from './middleware/rateLimiter.js';

dotenv.config();


const app = express();
const PORT =  process.env.PORT || 5000; 



// Middleware to parse JSON bodies
app.use(cors({
    origin: 'http://localhost:5173', 
}))
app.use(express.json());
app.use(rateLimiter)


app.use("/api/notes",routes)

connectDB().then(()=>{

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
})



