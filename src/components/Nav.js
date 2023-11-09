import React from "react";
import piggy from "../assets/porco.png";

const Nav = ({ hogs }) => {
	return (
		<div className="navWrapper">
			<span className="headerText">HogWild</span>
			<div className="TwirlyPig">
				<img src={piggy} className="App-logo" alt="piggy" />
			</div>
			<span className="normalText">
				A React App for County Fair Hog Fans
			</span>
			{hogs.map((hog) => (
				<div key={hog.name}>
					<h2>{hog.name}</h2>
					<img src={hog.image} alt="Hog Image" />
				</div>
			))}
		</div>
	);
};

export default Nav;
