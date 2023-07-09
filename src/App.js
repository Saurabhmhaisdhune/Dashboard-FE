import React from "react";
import "./App.css";
import SignIn from "./Pages/SignIn";
import { BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import ProtectedRoute from "./Utils/ProtectedRoute"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/" element={<Navigate replace to="/signin" />} />
          <Route path="/dashboard" element={<ProtectedRoute><Dashboard/></ProtectedRoute>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
