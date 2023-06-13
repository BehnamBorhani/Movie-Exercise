import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.scss";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import AboutMe from "./components/aboutMe/AboutMe";
import MovieSection from "./components/movieSection/MovieSection";

class App extends Component {
   render() {
      return (
         <>
            <Navbar />
            <Routes>
               <Route path="/" element={<Home />}></Route>
               <Route path="/movie" element={<MovieSection />}></Route>
               <Route path="/about-me" element={<AboutMe />}></Route>
            </Routes>
         </>
      );
   }
}

export default App;
