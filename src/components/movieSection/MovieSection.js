import React, { Component } from "react";
import "./movieSection.scss";
import axios from "axios";
import Card from "../card/Card";
import SearchBox from "../searchBox/SearchBox";

class MovieSection extends Component {
   constructor(props) {
      super(props);
      this.state = {
         movies: [],
      };
   }

   componentDidMount = () => {
      axios
         .get("./movies.json")
         .then((res) => this.setState({ movies: res.data }));
   };

   render() {
      return (
         <>
            <section className="container">
               <div className="card-container">
                  {this.state.movies.map((movie) => {
                     return <Card movie={movie} />;
                  })}
               </div>
               <SearchBox />
            </section>
         </>
      );
   }
}

export default MovieSection;
