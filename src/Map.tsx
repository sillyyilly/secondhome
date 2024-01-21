import {E_SDK_EVENT, Mappedin, TGetVenueMakerOptions} from "@mappedin/mappedin-js";
import "@mappedin/mappedin-js/lib/mappedin.css";
import "./Map.css";
import useMapView from "./hooks/useMapView";
import useVenue from "./hooks/useVenue";
import { useRef, useState } from "react";
import Popup from "./Popup";

const options: TGetVenueMakerOptions = {
	mapId: "65ac3a16ca641a9a1399dc24",
	key: import.meta.env.VITE_MI_CLIENT_ID,
	secret: import.meta.env.VITE_MI_CLIENT_SECRET,
};

const [room, setRoom] = useState("");

export default function Map() {
	const mapRef = useRef<HTMLDivElement|null>(null);
	const venue: Mappedin | undefined = useVenue(options);
	const mapView = useMapView(mapRef.current, venue);
	const getColor = (id: string) => {
		switch (id) {
			case "CPSC 310":
				return "#06c4e5";
			case "CPSC 330":
				return "#e506da";
			case "CPSC 340":
				return "#fd3732";
			case "CPSC 313":
				return "#0df54f";
			default:
				return "#646464"
		}
	}
	if (mapView) {
		mapView.on(E_SDK_EVENT.CLICK, ({ polygons }) => {
			mapView.clearAllPolygonColors();
			if (polygons.length > 0 && polygons[0].externalId) {
				mapView.setPolygonColor(polygons[0], getColor(polygons[0].externalId));
				setRoom(polygons[0].id);
			}
		});
	}
	// move onclicks to here
	// add onclick handler to mapview
	// useState that represents current selected room by id
	// conditionally render popup based on state
	// new file to render popup content - react props

	return (
		<div id="map">
			<div ref={mapRef} />
			<div id="popupDiv">
				<Popup />
			</div>
		</div>
	);
}
