import {
	E_SDK_EVENT,
	Mappedin,
	MapView,
	showVenue,
	TShowVenueOptions
} from "@mappedin/mappedin-js";
import { useEffect, useState } from "react";

export default function useMapView(
	el: HTMLElement | null,
	venue: Mappedin | undefined,
	options?: TShowVenueOptions
) {
	const [mapView, setMapView] = useState<MapView | undefined>();

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
							return "#f62b24";
						case "CPSC 313":
							return "#0df54f";
						default:
							return "#063ae5"
					}
				}

				_mapView.addInteractivePolygonsForAllLocations();
				// _mapView.FloatingLabels.labelAllLocations({ interactive: true });
				_mapView.on(E_SDK_EVENT.CLICK, ({ polygons }) => {
					if (polygons.length > 0 && polygons[0].externalId) {
						_mapView.setPolygonColor(polygons[0], getColor(polygons[0].externalId));
					} else {
						_mapView.clearAllPolygonColors();
					}
				});

				_mapView.on(E_SDK_EVENT.CLICK, ({ floatingLabels }) => {
					let polygon =
						(floatingLabels[0].node) ? floatingLabels[0].node.polygon : undefined;
					if (floatingLabels && floatingLabels.length > 0 && polygon && polygon.externalId) {
						_mapView.setPolygonColor(polygon, getColor(polygon.externalId));
					} else {
						_mapView.clearAllPolygonColors();
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
