import { Route, Routes } from "react-router-dom";

import InitialPage from "./pages";
import FindJobs from "./pages/FindJobs";
import SendJob from "./pages/SendJob";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<InitialPage />} />
        <Route path='find-job' element={<FindJobs />} />
        <Route path='send-job' element={<SendJob/>} />
      </Routes>
    </>
  );
}

export default App;
