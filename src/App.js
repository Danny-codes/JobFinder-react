import { Route, Redirect, Routes } from "react-router-dom";

import InitialPage from "./pages";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<InitialPage />} />
      </Routes>
    </>
  );
}

export default App;
