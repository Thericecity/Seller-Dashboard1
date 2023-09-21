import React from "react";
import { Routes, Route } from "react-router-dom";
import Search from "./Search/Search";
import Form from "./Form/Form";
import Loginpage from "./Login/Loginpage";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/form" element={<Form />}></Route>
        <Route path="/login" element={<Loginpage />}></Route>
      </Routes>
    </div>
  );
};

export default AllRoutes;
