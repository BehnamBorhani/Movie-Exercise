import React, { Component } from "react";
import "./home.scss";

class Home extends Component {
   constructor(props) {
      super(props);
      this.state = {
         images: [
            "./images/sliders/s1.jpg",
            "./images/sliders/s2.jpg",
            "./images/sliders/s3.jpg",
            "./images/sliders/s4.jpg",
            "./images/sliders/s5.jpg",
         ],
         index: 0,
      };
   }

   prevSlide = () => {
      const { images, index } = this.state;
      this.setState({ index: index - 1 });

      if (index - 1 <= 0) {
         this.setState({ index: images.length - 1 });
      }
   };

   nextSlide = () => {
      const { images, index } = this.state;
      this.setState({ index: index + 1 });

      if (index + 1 >= images.length) {
         this.setState({ index: 0 });
      }
   };

   componentDidMount = () => {
      setInterval(() => {
         this.nextSlide();
      }, 3000);
   };

   render() {
      const { images, index } = this.state;
      return (
         <>
            <header>
               <img src={images[index]} alt="" />
               <button className="prev" onClick={this.prevSlide}>
                  &lt;
               </button>
               <button className="next" onClick={this.nextSlide}>
                  &gt;
               </button>
            </header>
         </>
      );
   }
}

export default Home;
