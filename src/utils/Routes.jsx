import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Forms from "../pages/Forms";
import Profile from '../pages/Profile';

const RoutesComponent = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/forms" element={<Forms/>}/>
        <Route path="/profile" element={<Profile/>}/>
      </Routes>
    </>
  );
};
export default RoutesComponent;
