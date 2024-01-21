import { Mappedin, TGetVenueMakerOptions } from "@mappedin/mappedin-js";
import "@mappedin/mappedin-js/lib/mappedin.css";
import "./App.css";
import useMapView from "./hooks/useMapView";
import useVenue from "./hooks/useVenue";
// import React from 'react';

const options: TGetVenueMakerOptions = {
	mapId: "65ac3a16ca641a9a1399dc24",
	key: import.meta.env.VITE_MI_CLIENT_ID,
	secret: import.meta.env.VITE_MI_CLIENT_SECRET,
};
export default function App() {
	// See Trial API key Terms and Conditions
	// https://developer.mappedin.com/api-keys
	console.log(import.meta.env);

	const venue: Mappedin | undefined = useVenue(options);
	const { elementRef, mapView } = useMapView(venue);

	console.log(mapView);

	return <div id="app" ref={elementRef} />;
}
