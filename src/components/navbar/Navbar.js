import React, { Component } from 'react';
import "./navbar.scss";
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <>
        <nav>
          <Link to="/">Home</Link>
          <Link to="movie">Movie</Link>
          <Link to="about-me">About Me</Link>
        </nav>
      </>
    )
  }
}

export default Navbar;