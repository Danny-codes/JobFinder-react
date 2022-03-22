import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

const jobSlice = createSlice({
    name: 'jobs',
    initialState: {jobs: [{}]},
    reducers: {
        fetchData(state){
            const api= axios.create({
                baseURL: "http://localhost:3000/api"
              })
                api
                  .get('/jobs')
                  .then((response) => state.jobs = response.data)
                  .catch((err) => {
                    console.log("ops! an error happened")
                  })
        }
    }
})

export default jobSlice