import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { JobsContextProvider } from "./store/job-slice";
import { Provider } from 'react-redux';
import store from "./store";

import "./index.css";
import App from "./App";
import { AuthContextProvider } from "./store/authContext";
ReactDOM.render(
  <BrowserRouter>
  <Provider store={store}>
    <AuthContextProvider>
      <JobsContextProvider>
        <App />
      </JobsContextProvider>
    </AuthContextProvider>
    </Provider>
  </BrowserRouter>,

  document.getElementById("root")
);
