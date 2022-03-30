import { Route, Routes } from "react-router-dom";
import SignUpPage from "./pages/SignUpPage";
import InitialPage from "./pages";
import FindJobs from "./pages/FindJobs";
import JobPage from "./pages/JobPage";
import SendJob from "./pages/SendJob";
import SignIn from "./pages/SignIn";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<InitialPage />} />
        <Route path="/job/:id" element={<JobPage />} />
        <Route path='/find-job/' element={<FindJobs />} />
        <Route path='/find-job/:prev' element={<FindJobs />} />
        <Route path='/signIn' element={<SignIn/>} />
        <Route path='/signUp' element={<SignUpPage/>} />
        <Route path='/send-job' element={<SendJob/>} />
        <Route path="*" element={<InitialPage />} />
      </Routes>
    </>
  );
}

export default App;
