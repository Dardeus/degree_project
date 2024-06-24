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
            <Route path="/future" element={<Future/>}/>
            <Route path="/auth" element={<Auth/>}/>
            <Route path="/auth/registration" element={<Registration/>}/>
            <Route path="/team" element={<Team/>}/>
            <Route path="/" element={<Home/>}/>
            <Route path="/dimension" element={<Dimension/>}/>
          </Routes>
          <KosyginButton/>
        </div>
      </div>
  );
}

export default App;
