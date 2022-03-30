import { createContext, useState } from "react";
import axios from "axios";

const JobsContext = createContext({
  latestJobsList: [{}],
  filteredJobs: [{}],
  filterJobs: () => {},
  api: "",
  showingModal: () => {},
  hidingModal: () => {},
  showModal: false,
  fetchedData: () => {}
});

export const JobsContextProvider = (props) => {
  const [latestJobsList, setLatestJobsList] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const showingModal = () => {
    setShowModal(true);
  };

  const hidingModal = () => {
    setShowModal(false);
  };

  const api = axios.create({
    baseURL: "http://localhost:3000/api",
  });

  const fetchedData = () => {
      api
        .get("/jobs")
        .then((response) => {
          setLatestJobsList(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
  }

  
  const filterJobs = async (filterData) => {
    await api
      .post("/jobs/filtered", {
        role: filterData.role,
        state: filterData.state,
        category: filterData.category,
        contract: filterData.contract,
      })
      .then((response) => {
        setFilteredJobs(response.data);
      })
      .catch((error) => console.log(error));
  };

  return (
    <JobsContext.Provider
      value={{
        latestJobsList,
        filteredJobs,
        filterJobs,
        api,
        showingModal,
        hidingModal,
        showModal,
        fetchedData
      }}
    >
      {props.children}
    </JobsContext.Provider>
  );
};

export default JobsContext;
