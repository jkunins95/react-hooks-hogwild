import React from "react";
import Nav from "./Nav";

import hogs from "../porkers_data";
import HogList from "./HogList";

function App() {
	return (
		<div className="App">
			<Nav hogs={hogs} />
			<HogList />
		</div>
	);
}

export default App;
