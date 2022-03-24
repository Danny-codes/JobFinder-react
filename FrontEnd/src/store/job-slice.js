import { createContext, useState, useEffect } from "react";
import axios from "axios";


const JobsContext = createContext({
  latestJobsList: [{}], filteredJobs: [{}], filterJobs: ()=>{}
});


export const JobsContextProvider = (props) => {
  const [latestJobsList, setLatestJobsList] = useState([{}]);
  const [filteredJobs, setFilteredJobs] = useState([{}])

  const api = axios.create({
    baseURL: "http://localhost:3000/api",
  });

  useEffect(() => {
    api
      .get("/jobs")
      .then((response) => {
        setLatestJobsList(response.data)
        console.log(response.data)
      })
      .catch((err) => {
        console.log("ops! an error happened");
      });
  }, []);


  const filterJobs = (props) => {
    api
    .post('/jobs/filtered', {
      role: props.role,
      state: props.state,
      category: props.category,
      contract: props.contract
    })
    .then(response => {
      setFilteredJobs(response.data) 
      console.log(response)} )
    .catch(error => console.log(error))
  }

  return (
    <JobsContext.Provider value={{latestJobsList, filteredJobs, filterJobs }}>
      {props.children}
    </JobsContext.Provider>
  );
};

export default JobsContext;
