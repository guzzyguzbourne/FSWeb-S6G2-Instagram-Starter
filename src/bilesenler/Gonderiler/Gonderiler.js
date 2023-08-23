import React from "react";
import Gonderi from "./Gonderi";
import "./Gonderiler.css";

const Gonderiler = (props) => {
  const { gonderiyiBegen, gonderiler } = props;

  return (
    <div className="posts-container-wrapper">
      {gonderiler.map((item)=> {
        return (<Gonderi key= {item.id} gonderi= {item} gonderiyiBegen = {gonderiyiBegen}/>);
      })}
    </div>
  );
};

export default Gonderiler;
