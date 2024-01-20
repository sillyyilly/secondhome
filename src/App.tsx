import { TGetVenueOptions } from "@mappedin/mappedin-js";
import "@mappedin/mappedin-js/lib/mappedin.css";
import { useMemo } from "react";
import "./App.css";
import useMapView from "./hooks/useMapView";
import useVenue from "./hooks/useVenue";

export default function App() {
	// See Trial API key Terms and Conditions
	// https://developer.mappedin.com/api-keys
	const options = useMemo<TGetVenueOptions>(
		() => ({
			venue: "mappedin-demo-mall",
			clientId: "5eab30aa91b055001a68e996",
			clientSecret: "RJyRXKcryCMy4erZqqCbuB1NbR66QTGNXVE0x3Pg6oCIlUR1"
		}),
		[]
	);

	const venue = useVenue(options);
	const { elementRef, mapView } = useMapView(venue);

	console.log(mapView);

	return <div id="app" ref={elementRef} />;
}
