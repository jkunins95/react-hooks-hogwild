import React from "react";
import hogs from "../porkers_data";

import HogDetails from "./HogDetails";

const HogList = ({ hog }) => {
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
          <button>Show Details</button>
          <HogDetails
            key={hog.name}
            hog={hog}
            name={hog.name}
            image={hog.image}
            specialty={hog.specialty}
            greased={hog.greased}
            weight={hog.weight}
            highest={hog["highest medal achived"]}
          />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default HogList;