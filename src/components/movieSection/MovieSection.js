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
         filteredMovies: [],
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

   searchByTitle = (event) => {
      const title = event.target.value.toLowerCase();
      const result = this.state.movies.filter((movie) => {
         return movie.Title.toLowerCase().includes(title);
      });
      this.setState({ filteredMovies: result });
   };

   componentDidMount = () => {
      axios
         .get("./movies.json")
         .then((res) =>
            this.setState({ movies: res.data, filteredMovies: res.data })
         )
         .then(() => this.giveGenres());
   };

   render() {
      const { filteredMovies, genres } = this.state;
      return (
         <>
            <section className="container">
               <div className="card-container">
                  {filteredMovies.map((movie, index) => {
                     return <Card movie={movie} key={index} />;
                  })}
               </div>
               <SearchBox genres={genres} searchByTitle={this.searchByTitle} />
            </section>
         </>
      );
   }
}

export default MovieSection;
