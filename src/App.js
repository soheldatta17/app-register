import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import Menu from "./components/Resume/ResumeNew";
import Gallery from "./components/Gallery/Gallery";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import Cookies from "universal-cookie"
// import "./App.css";
import Auth from "./components/Auth/Auth";
import "bootstrap/dist/css/bootstrap.min.css";
const cookies = new Cookies();
const App = () => {
  const [isAuth, setIsAuth] = useState(cookies.get("auth-token"));
  const [Email, setEmail] = useState("")
  const [Room, setRoom] = useState(0)
  const [Icon, setIcon] = useState("")
  const [load, upadateLoad] = useState(true);

  var s=0
  if (!isAuth)
  {
    return(
      <Auth setIsAuth={setIsAuth} setEmail={setEmail} setIcon={setIcon}/>
    )
  }
else
{
  const photoURL = (cookies.get('auth-token') && cookies.get('auth-token').photoURL) || '';
  return (
    
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar setIsAuth={setIsAuth} setEmail={setEmail} Icon={photoURL} setIcon={setIcon}/>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Menu />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
}

export default App;
