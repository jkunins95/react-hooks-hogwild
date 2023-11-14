import React, { useState } from "react";
import hogs from "../porkers_data";

import HogDetails from "./HogDetails";

const HogList = () => {
  const [showGreasedHogs, setShowGreasedHogs] = useState(false);

  const toggleGreasedHogs = () => {
    setShowGreasedHogs(!showGreasedHogs);
  };

  // Filter hogs (greased condition)
  const filteredHogs = showGreasedHogs ? hogs.filter((hog) => hog.greased) : hogs;

  return ( 
    <>
      <button onClick={toggleGreasedHogs}>
        {showGreasedHogs ? 'Show All Hogs' : 'Show Greased Hogs'}
      </button>
      <div className="ui grid container">
        {/* FilteredHogs needs to be changed in order to show which hogs are greased or not */}
        {filteredHogs.map((hog) => (
          <div className="ui eight wide column" key={hog.name}>
            <div className="ui card">
              <div className="image">
                <img key={hog.name} src={hog.image} alt={hog.name} />
              </div>
              <div className="content">
                <a className="header">{hog.name}</a>
            <HogDetails
              specialty={hog.specialty}
              greased={hog.greased}
              weight={hog.weight}
              highestMedal={hog["highest medal achieved"]}
            />
              </div>
            </div>
          </div>
      ))}
      </div>
    </>
  );
}

export default HogList;