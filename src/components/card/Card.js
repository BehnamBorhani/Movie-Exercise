import React, { Component } from "react";
import "./card.scss";

class Card extends Component {
   render() {
      const { movie } = this.props;
      return (
         <>
            <div className="card">
               <div className="poster">
                  <img src={movie.Poster} alt={movie.Title} />
               </div>
               <div className="description">
                  <h2 className="title">{movie.Title}</h2>
                  <p className="information">
                     <span>{movie.Director}</span>
                     <span>{movie.Year}</span>
                  </p>
                  <p className="genre">{movie.Genre}</p>
               </div>
            </div>
         </>
      );
   }
}
export default Card;
