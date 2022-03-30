import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { JobsContextProvider } from "./store/job-slice";

import "./index.css";
import App from "./App";
import { AuthContextProvider } from "./store/authContext";
ReactDOM.render(
  <BrowserRouter>
    <AuthContextProvider>
      <JobsContextProvider>
        <App />
      </JobsContextProvider>
    </AuthContextProvider>
  </BrowserRouter>,

  document.getElementById("root")
);
