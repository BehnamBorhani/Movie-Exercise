import React, { Component } from "react";
import "./aboutMe.scss";

class AboutMe extends Component {
   render() {
      return (
         <>
            <div className="about-me-sec">
               <div className="texts">
                  <h1 className="title">
                     I am <br /> <span className="name">Behnam Borhani</span>
                  </h1>
                  <p className="sub-title">
                     As a Junior Frontend Developer, I am passionate about
                     creating intuitive and user-friendly web interfaces that
                     enhance the user experience. With proficiency in HTML, CSS,
                     and JavaScript, I have developed various projects that
                     demonstrate my creativity, attention to detail, and
                     technical skills. <br /> I approach every project with a
                     problem-solving mindset, striving to find innovative
                     solutions that meet the client's needs while ensuring
                     optimal performance and scalability. My ability to work
                     collaboratively in a team setting enables me to communicate
                     effectively and contribute to the success of the project.
                  </p>
                  <div className="media">
                     <a href="#">
                        <i className="fa fa-instagram"></i>
                     </a>
                     <a href="#">
                        <i className="fa fa-facebook"></i>
                     </a>
                     <a href="#">
                        <i className="fa fa-twitter"></i>
                     </a>
                     <a href="#">
                        <i className="fa fa-telegram"></i>
                     </a>
                     <a href="https://github.com/BehnamBorhani">
                        <i className="fa fa-github"></i>
                     </a>
                     <a href="https://www.linkedin.com/in/behnam-borhani">
                        <i className="fa fa-linkedin"></i>
                     </a>
                  </div>
               </div>
               <div className="shape"></div>
               <div className="circle"></div>
            </div>
         </>
      );
   }
}

export default AboutMe;
