import React, { useEffect, useState } from 'react';
import { Route, Router } from 'react-router-dom';
import Home from '../pages/Home';
import Search from '../pages/Search';
import Profile from '../pages/Profile';
import Login from '../pages/Login';
import Register from '../pages/Register';
import ForgotPassword from '../pages/ForgotPassword';
import PrivateRoute from './PrivateRoutes';
import { AuthProvider } from '../Services/Auth/AuthContext';

const RoutesComponent = () => {
  return (
    <>
      <AuthProvider>
        <Router>
          <PrivateRoute exact path="/" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/forgotpassword" element={<ForgotPassword />} />
          <PrivateRoute exact path="/dashboard" element={<Home />} />
          <PrivateRoute exact path="/search" element={<Search />} />
          <PrivateRoute exact path="/profile" element={<Profile />} />
        </Router>
      </AuthProvider>
    </>
  );
};
export default RoutesComponent;
