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
         genres: [],
      };
   }

   giveGenres = () => {
      const genresSet = new Set();
      this.state.movies.forEach((movie) => {
         const movieGenres = movie.Genre.split(", ");
         movieGenres.forEach((genre) => genresSet.add(genre));
      });

      this.setState({ genres: [...genresSet] });
   };

   componentDidMount = () => {
      axios
         .get("./movies.json")
         .then((res) => this.setState({ movies: res.data }))
         .then((res) => this.giveGenres());
   };

   render() {
      return (
         <>
            <section className="container">
               <div className="card-container">
                  {this.state.movies.map((movie, index) => {
                     return <Card movie={movie} key={index} />;
                  })}
               </div>
               <SearchBox />
            </section>
         </>
      );
   }
}

export default MovieSection;
