// import icons
import "bootstrap-icons/font/bootstrap-icons.css";
// import 'remixicon/fonts/remixicons.css';

// import Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import HomePage from "./HomePage";
import { Routes, Route } from "react-router-dom";
import Enquiry from "./components/Enquiry";
import Destination from "./Destination";
import Loginform from "./components/Loginform";
import DestinationPage_2 from "./DestinationPage_2";
import TrippDetails from "./components/TrippDetails";

function App() {
  return (
    <>
      <Header />
      <Sidebar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/enquiry" element={<Enquiry />} />
        <Route path={`/destination--edit`} element={<DestinationPage_2 />} />
        <Route path="/tripp" element={<TrippDetails />} />
      </Routes>
      {/* <Loginform /> */}
    </>
  );
}

export default App;
