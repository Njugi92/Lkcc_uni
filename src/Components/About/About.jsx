import React from "react";
import "./About.css";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";
const About = ({ setPlayState }) => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
        <img
          src={play_icon}
          alt=""
          className="play-icon"
          onClick={() => {
            setPlayState(true);
          }}
        />
      </div>
      <div className="about-right">
        <h2>ABOUT UNIVERSITY</h2>
        <h3>Nurturing Tomorrow's Leaders Today</h3>
        <p>
          Embark on transformative educational journey with our UNIVERSITY
          comprehensive educational programs. Our cutting-edge curriculumn is
          designed to empower students with the knowledge, skills and experience
          needed to excel in dynamic field of education.
        </p>
        <p>
          With a focus in innovation, hands-on learning, and personalized
          mentorship our programs prepare inspiring educators to make a
          meaningful impact in classrooms, schools and community.
        </p>
        <p>
          Whether you aspire to become a teacher, administrator, counselor or
          educational Leader , Our diverse range of programs offers the perfect
          pathway to archive your goals and unlock your potential in shapping
          the future of education.
        </p>
      </div>
    </div>
  );
};

export default About;
