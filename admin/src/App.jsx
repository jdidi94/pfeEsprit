import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './components/Login/Login.jsx';
import Messages from './components/Message/Message.jsx';
import AddNewAdmin from './components/AddAdmin/AddNewAdmin.jsx';
import { Context } from "./main.jsx";
import axios from "axios";
import SideBar from './components/SideBar/SideBar.jsx';
import "./App.css";
import Students from './components/Students/Students.jsx';
import Dashbord from "./components/Dashbord/Dashbord.jsx";
import JobOffer from "./components/JobOffer/JobOffer.jsx";
import Events from "./components/Events/Events.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const { isAuthenticated, setIsAuthenticated, setUser } = useContext(Context);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:4000/api/v1/user/admin/me", {
          withCredentials: true,
        });
        setIsAuthenticated(true);
        setUser(response.data.user);
      } catch (error) {
        setIsAuthenticated(false);
        setUser({});
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, [setIsAuthenticated, setUser]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Router>
        <SideBar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={isAuthenticated ? <Dashbord /> : <Navigate to="/login" />} />
          <Route path="/admin/addnew" element={isAuthenticated ? <AddNewAdmin /> : <Navigate to="/login" />} />
          <Route path="/messages" element={isAuthenticated ? <Messages /> : <Navigate to="/login" />} />
          <Route path="/students" element={isAuthenticated ? <Students /> : <Navigate to="/login" />} />
          <Route path="/job" element={isAuthenticated ? <JobOffer /> : <Navigate to="/login" />} />
          <Route path="/events" element={isAuthenticated ? <Events /> : <Navigate to="/events" />} />

        </Routes>
        <ToastContainer position="top-center" />
      </Router>
    </>
  );
};

export default App;
