import React from "react";
import FormikRenderProps from "./components/FormikRenderProps/FormikRenderProps";
import "./App.css";
import driver from "./driv.png";
export default function App(){
  return (
    <div className="App">
      <div className="container">
        <div className="left">
          <h2>Opportunity is everywhere</h2>
          <p className="sub">make the most of your time on the road on the platform with the largest network of active riders</p>
          <img src={driver} alt="driver" maxHeight="280px" maxWidth="400px" />
        </div>
        <FormikRenderProps />
      </div>
    </div>
  );
}