
import { Mappedin, TGetVenueMakerOptions } from "@mappedin/mappedin-js";
import "@mappedin/mappedin-js/lib/mappedin.css";
import useMapView from "./hooks/useMapView";
import useVenue from "./hooks/useVenue";
import Map from "./Map";
import "../app/globals.css";

const options: TGetVenueMakerOptions = {
	mapId: "65ac3a16ca641a9a1399dc24",
	key: import.meta.env.VITE_MI_CLIENT_ID,
	secret: import.meta.env.VITE_MI_CLIENT_SECRET,
};

export default function App() {
	return (
		<div id="app">
			<Map />
		</div>
	);
}
