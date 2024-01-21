import { Mappedin, TGetVenueMakerOptions } from "@mappedin/mappedin-js";
import "@mappedin/mappedin-js/lib/mappedin.css";
import "./Map.css";
import useMapView from "./hooks/useMapView";
import useVenue from "./hooks/useVenue";
import { useRef, useState } from "react";

const options: TGetVenueMakerOptions = {
	mapId: "65ac3a16ca641a9a1399dc24",
	key: import.meta.env.VITE_MI_CLIENT_ID,
	secret: import.meta.env.VITE_MI_CLIENT_SECRET,
};


export default function Map() {
	// See Trial API key Terms and Conditions
	// https://developer.mappedin.com/api-keys
	const mapRef = useRef<HTMLDivElement|null>(null);
	const venue: Mappedin | undefined = useVenue(options);
	const mapView = useMapView(mapRef.current, venue);

	return <div ref={mapRef} />;
}
