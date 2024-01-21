import "./App.css"
import Map from "./Map";
import "../app/globals.css";
import { useState } from "react";
import { Button } from "./components/ui/button";

export default function App() {
	const [ mapHidden, setMapHidden ] = useState(true);

	return (
		<div id="app">
			<div id="intro" className={ "flex flex-col items-center" + (mapHidden ? "" : " hidden") }>
				<div className="text-5xl font-extrabold">Second Home</div>
				<div className="mt-2 text-lg font-light italic">Your life, mapped</div>
				<input type="text" className="border-gray-500 border-2 rounded-md py-2 px-10 text-center mt-6" placeholder="Enter your Map Key" ></input>
				<Button className="mt-4" onClick={() => setMapHidden(false)}>Explore</Button>
			</div>

			<div id="mapDiv" className={ mapHidden ? "opacity-0 absolute" : "opacity-100"}>
				<Map />
			</div>
		</div>
	);
}
