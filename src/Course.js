import Javascript from "./images/javascript.jpeg";
import Komple from "./images/komple.jpeg";
import Python from "./images/python.jpeg";
import React from "./images/react.jpeg";
import "./course.css";

const courseMap = {
  Javascript: Javascript,
  Komple: Komple,
  Python: Python,
  React: React,
};

function Course({ courseName }) {
  return (
    <div className="coursediv">
      <img className="course" src={courseMap[courseName]}></img>
    </div>
  );
}

export default Course;
