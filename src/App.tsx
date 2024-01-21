import "./App.css"
import Map from "./Map";
import "../app/globals.css";
import { useState } from "react";
import { Button } from "./components/ui/button";

export default function App() {
	const [ mapHidden, setMapHidden ] = useState(true);

	return (
		<div id="app">
			<div id="intro">
				<div className="text-5xl font-extrabold">Second Home</div>
				<div className="mt-2 text-lg font-light italic">Your life, mapped</div>
				<Button className="mt-8" onClick={() => setMapHidden(false)}>Explore</Button>
			</div>

			<Map />
		</div>
	);
}
// <div id="mapDiv" className={ mapHidden ? "opacity-0" : "opacity-100"}>
// 	<Map />
// </div>
