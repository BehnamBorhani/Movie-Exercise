import React, { Component } from "react";
import "./movieSection.scss";
import SearchBox from "../searchBox/SearchBox";

class MovieSection extends Component {
   render() {
      return (
         <>
            <section className="container">
               <div className="card-container"></div>
               <SearchBox />
            </section>
         </>
      );
   }
}

export default MovieSection;
