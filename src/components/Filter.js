import React, { useState } from 'react';
import HogDetails from './HogDetails';

const Filter = ({ hogs }) => {
  const [sortBy, setSortBy] = useState("name");
  const [sortOrder, setSortOrder] = useState("asc");

  const toggleSortBy = (criteria) => {
    if (criteria === sortBy) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(criteria)
      setSortOrder("asc");
    }
  }

  const sortedHogs = filteredHogs.sort((a, b) => {
    const compareValue =
      sortBy === "name"
        ? a.name.localeCompare(b.name)
        : sortBy === "weight"
        ? a.weight - b.weight
        : 0;
  
    return sortOrder === "asc" ? compareValue : -compareValue;
  });

  return (
    <div>
      <div>
        <button onClick={toggleGreasedHogs}>
          {showGreasedHogs ? 'Show All Hogs' : 'Show Greased Hogs'}
        </button>
        <button onClick={() => toggleSortBy('name')}>Sort by Name</button>
        <button onClick={() => toggleSortBy('weight')}>Sort by Weight</button>
      </div>
      <div className="ui grid container">
        {sortedHogs.map((hog) => (
          <div className="ui eight wide column" key={hog.name}>
            <div className="ui card">
              <div className="image">
                <img src={hog.image} alt={hog.name} />
              </div>
              <div className="content">
                <a className="header">{hog.name}</a>
                <HogDetails
                  name={hog.name}
                  specialty={hog.specialty}
                  weight={hog.weight}
                  greased={hog.greased}
                  highestMedal={hog["highest medal achieved"]}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


export default Filter;