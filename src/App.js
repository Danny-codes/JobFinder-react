import { Route, Redirect, Routes } from "react-router-dom";

import InitialPage from "./pages";
import FindJobs from "./pages/FindJobs";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<InitialPage />} />
        <Route path='find-job' element={<FindJobs />} />
      </Routes>
    </>
  );
}

export default App;
