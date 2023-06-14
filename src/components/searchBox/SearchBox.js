import React, { Component } from "react";
import "./searchBox.scss";

class SearchBox extends Component {
   render() {
      const { genres, searchByTitle } = this.props;
      return (
         <>
            <aside>
               <div className="search">
                  <input
                     type="text"
                     name="search"
                     id="search"
                     placeholder="search by movie title..."
                     onChange={searchByTitle}
                  />
               </div>
               <div className="btn-container">
                  {genres.map((genre, index) => {
                     return (
                        <button className="btn" key={index}>
                           {genre}
                        </button>
                     );
                  })}
               </div>
            </aside>
         </>
      );
   }
}

export default SearchBox;
