import "./App.css"
import Map from "./Map";
import "../app/globals.css";
import { useState } from "react";
import { Button } from "./components/ui/button";

export default function App() {
	const [mapHidden, setMapHidden] = useState(true);

	return (
		<div id="app">
			<div id="intro" className={"flex flex-col items-center" + (mapHidden ? "" : " hidden")}>
				<svg class="animate-bounce" width="200" height="125" xmlns="http://www.w3.org/2000/svg">
					<line x1="50" y1="80" x2="100" y2="50" stroke="black" stroke-width="2" />

					<line x1="100" y1="50" x2="150" y2="80" stroke="black" stroke-width="2" />
				</svg>
				<div className="text-5xl font-extrabold mt-0">Second Home</div>
				<div className="mt-2 text-lg font-light italic">Your life, mapped</div>
				<input type="text" className="border-gray-500 border-2 rounded-md py-2 px-10 text-center mt-6" placeholder="65ac3a16ca641a9a1399dc24" ></input>
				<Button className="mt-4" onClick={() => setMapHidden(false)}>Explore</Button>
			</div>

			<div id="mapDiv" className={mapHidden ? "opacity-0 absolute" : "opacity-100"}>
				<Map />
			</div>
		</div>
	);
}
