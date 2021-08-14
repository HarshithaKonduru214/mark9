import React from "react";
import "./show.css";

function Show({ title, platform, rating, src }) {
  return (
    <div className="container">
      <img src={src} />
      <div className="details">
        <p id="name">{title}</p>
        <p> Platform: {platform}</p>
        <p> Rating: {rating}</p>
      </div>
    </div>
  );
}

export default Show;
