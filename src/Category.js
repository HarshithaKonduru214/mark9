import React from "react";
import "./category.css";

function Category({ title }) {
  function clickHandler() {
    document.querySelector(".comedy").style.display = "none";
    document.querySelector(".action").style.display = "none";
    document.querySelector(".romance").style.display = "none";
    document.querySelector(".mystery").style.display = "none";
    {
      if (title === "Comedy") {
        document.querySelector(".comedy").style.display = "flex";
      } else if (title === "Action") {
        document.querySelector(".action").style.display = "flex";
      } else if (title === "Romance") {
        document.querySelector(".romance").style.display = "flex";
      } else {
        document.querySelector(".mystery").style.display = "flex";
      }
    }
  }

  return <button onClick={clickHandler}>{title}</button>;
}

export default Category;
