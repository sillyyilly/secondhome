import {
	E_SDK_EVENT,
	Mappedin,
	MapView,
	showVenue,
	TShowVenueOptions
} from "@mappedin/mappedin-js";
// import {
// 	Select,
// 	SelectContent,
// 	SelectItem,
// 	SelectTrigger,
// 	SelectValue,
// } from "@/components/ui/select"
import { useEffect, useState } from "react";
import {MappedinPolygon} from "@mappedin/mappedin-js/get-venue/MappedinPolygon";

export default function useMapView(
	el: HTMLElement | null,
	venue: Mappedin | undefined,
	options?: TShowVenueOptions
) {
	const [mapView, setMapView] = useState<MapView | undefined>();
	const [currRoom, setRoom] = useState("");

	useEffect(() => {
		async function renderVenue() {
			if (el == null || venue == null) {
				return;
			}

			if (mapView != null && mapView.venue.venue.id === venue.venue.id) {
				return;
			}

			if (mapView != null) {
				mapView.destroy();
			}

			try {
				const _mapView = await showVenue(el, venue, options);
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

				_mapView.addInteractivePolygonsForAllLocations();
				_mapView.FloatingLabels.labelAllLocations({ interactive: true });
				// clicking a room colours it in, clicking elsewhere de-colours all rooms
				_mapView.on(E_SDK_EVENT.CLICK, ({ polygons }) => {
					_mapView.clearAllPolygonColors();
					if (polygons.length > 0 && polygons[0].externalId) {
						_mapView.setPolygonColor(polygons[0], getColor(polygons[0].externalId));
					}
				});
				// clicking a label colours its indicated room, clicking elsewhere de-colours all rooms
				_mapView.on(E_SDK_EVENT.CLICK, ({ floatingLabels }) => {
					if (floatingLabels && floatingLabels.length > 0) {
						let polygon = (floatingLabels[0].node) ? floatingLabels[0].node.polygon : undefined;
						_mapView.clearAllPolygonColors();
						if (polygon && polygon.externalId) {
							_mapView.setPolygonColor(polygon, getColor(polygon.externalId));
						}
					}
				});
				setMapView(_mapView);
			} catch (e) {
				setMapView(undefined);
			}
		}

		renderVenue();
	}, [el, venue, options, mapView]);

	return mapView;
}
