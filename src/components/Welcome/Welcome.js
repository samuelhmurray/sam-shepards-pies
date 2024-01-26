import React from "react";
import "./Welcome.css";
import "bootstrap/dist/css/bootstrap.min.css";

export const Welcome = () => {
  return (
    <div className="welcome-container text-light">
      <h1 className="text-dark">
        <span>Welcome to</span>
        <span>Shepherds Pies</span>
      </h1>
      <div className="text-dark">
        Slice of Perfection, Every Bite's a Celebration!
      </div>
    </div>
  );
};
