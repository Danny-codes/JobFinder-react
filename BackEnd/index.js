import  express  from "express";
import DB from "./database/db.js";
import jobs from "./routes/jobsRoutes.js"

const app = express();


//body parser
app.use(express.urlencoded({ extends: false }));
app.use(express.json());

//routes
app.use('/api', jobs)

app.listen(3000, async(err) => {
    await DB()
})