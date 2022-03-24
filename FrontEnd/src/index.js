import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { JobsContextProvider } from "./store/job-slice";

import "./index.css";
import App from "./App";
ReactDOM.render(
  <BrowserRouter>
    <JobsContextProvider>
      <App />
    </JobsContextProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
