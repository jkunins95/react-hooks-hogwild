import React from "react";
import hogs from "../porkers_data";

const HogList = () => {
  return ( 
    <div className="ui grid container">
      {hogs.map((hog) => (
        <div className="ui eight wide column" key={hog.name}>
          <div className="ui card">
            <div className="image">
              <img key={hog.name} src={hog.image} alt={hog.name} />
            </div>
            <div className="content">
              <a className="header">{hog.name}</a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default HogList;