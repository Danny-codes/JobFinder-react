import  express  from "express";
import jobs from "./routes/jobsRoutes.js"

const app = express();

//routes
app.use('/api', jobs)

app.listen(3000, (err) => {
    if(err){
        console.log("Deu ruim")
    }
    else{
        console.log("Deu Bom")
    }
})