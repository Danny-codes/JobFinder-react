import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialJobsState = {
  latestJobsList: [{}],
  filteredJobs: [{}],
  showModal: false,
};

const api = axios.create({
  baseURL: "http://localhost:3000/api",
});

const jobsSlice = createSlice({
   name: "jobs",
   initialState: initialJobsState, 
   reducers: {
      fetchLatest(state) {
           api
          .get("/jobs")
          .then((response) => {
           state.latestJobsList = response.data
          })
          .catch((err) => {
            console.log(err);
          });
      },
      replaceJobs(state, action){
        state.latestJobsList = action.payload.jobs;
      },
      fetchFiltered(state,action){
           api
        .post("/jobs/filtered", {
          role: action.payload.role,
          state: action.payload.state,
          category: action.payload.category,
          contract: action.payload.contract,
        })
        .then((response) => {
          state.filteredJobs(response.data);
        })
        .catch((error) => console.log(error));
      },
      showModalSuccess(state){
          state.showModal(true)
      },
      hideModalSuccess(state){
          state.showModal(false)
      }
   },
});

export const jobsActions = jobsSlice.actions;

export default jobsSlice.reducer
