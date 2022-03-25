import { createContext, useState, useEffect } from "react";
import axios from "axios";


const JobsContext = createContext({
  latestJobsList: [{}], filteredJobs: [{}], filterJobs: ()=>{}
});


export const JobsContextProvider = (props) => {
  const [latestJobsList, setLatestJobsList] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([])

  const api = axios.create({
    baseURL: "http://localhost:3000/api",
  });

  useEffect(() => {
    api
      .get("/jobs")
      .then((response) => {
        setLatestJobsList(response.data)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  const filterJobs = async (filterData) => {
    await api
    .post('/jobs/filtered', {
      role: filterData.role,
      state: filterData.state,
      category: filterData.category,
      contract: filterData.contract
    })
    .then(response => {
      setFilteredJobs(response.data) 
     } )
    .catch(error => console.log(error))
  }

  return (
    <JobsContext.Provider value={{latestJobsList, filteredJobs, filterJobs }}>
      {props.children}
    </JobsContext.Provider>
  );
};

export default JobsContext;
