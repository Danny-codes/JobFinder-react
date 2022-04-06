import axios from "axios";
import { jobsActions } from "./jobs-slice";

export const fetchJobs = () => {
    return async(dispatch) => {
            const api = axios.create({
                baseURL: "http://localhost:3000/api",
              });

              api
              .get("/jobs")
              .then((response) => {
               dispatch(jobsActions.replaceJobs({
                   jobs: response.data
               })) 
              })
              .catch((err) => {
                console.log(err);
              });
        
    }
}