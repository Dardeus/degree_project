import React from 'react';
import "./app.scss"
import {Route, Routes} from "react-router-dom";
import Header from "./components/Header";
import Auth from "./pages/Auth";
import Team from "./pages/Team";
import Registration from "./pages/Auth/Registration";
import Chat from "./components/Chat";
import Dimension from "./pages/Dimension";
import Future from "./pages/Future";
import Home from "./pages/Home";
import KosyginButton from "./components/KosyginButton";


function App() {

  return (
      <div className="App">
        <Header/>
        <div className="Page">
          <Chat/>
          <Routes>
            <Route path="/degree_project/" element={<Home/>}/>
            <Route path="/degree_project/future" element={<Future/>}/>
            <Route path="/degree_project/auth" element={<Auth/>}/>
            <Route path="/degree_project/dimension" element={<Dimension/>}/>
            <Route path="/degree_project/auth/registration" element={<Registration/>}/>
            <Route path="/degree_project/team" element={<Team/>}/>
          </Routes>
          <KosyginButton/>
        </div>
      </div>
  );
}

export default App;
