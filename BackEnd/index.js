import  express  from "express";
import DB from "./database/db.js";
import jobs from "./routes/jobsRoutes.js"
import user from './routes/userRoute.js'
import auth from './routes/authRoutes.js'
import cors from 'cors'
const app = express();

app.use(cors())


//body parser
app.use(express.urlencoded({ extends: false }));
app.use(express.json());

//routes
app.use('/api', jobs)
app.use('/api', user)
app.use('/api', auth)
 
app.listen(3000, async(err) => {
    await DB()
})