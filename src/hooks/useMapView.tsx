import {
    E_SDK_EVENT,
    Mappedin,
    MapView,
    showVenue,
    TMapViewOptions
} from "@mappedin/mappedin-js";
import {useCallback, useEffect, useRef, useState} from "react";

export default function useMapView(
    venue: Mappedin | undefined,
    options?: TMapViewOptions
) {
    // Store the MapView instance in a state variable
    const [mapView, setMapView] = useState<MapView | undefined>();
    const mapRef = useRef<HTMLDivElement | null>(null);
    const isRendering = useRef(false);

    // Render the MapView asynchronously
    const renderVenue = useCallback(
        async (el: HTMLDivElement, venue: Mappedin, options?: TMapViewOptions) => {
            if (isRendering.current || mapView != null) {
                return;
            }

            isRendering.current = true;

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

            const _mapView = await showVenue(el, venue, options);
            _mapView.addInteractivePolygonsForAllLocations();
            _mapView.FloatingLabels.labelAllLocations({ interactive: true });
            _mapView.on(E_SDK_EVENT.CLICK, ({polygons}) => {
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

            isRendering.current = false;
        },
        [isRendering, mapView, setMapView]
    );

    // Pass this ref to the target div which will render the MapView
    const elementRef = useCallback(
        (element: HTMLDivElement | null) => {
            if (element == null) {
                return;
            }

            mapRef.current = element;

            if (mapView == null && venue != null && !isRendering.current) {
                renderVenue(element, venue, options);
            }
        },
        [mapView, venue, renderVenue, options]
    );

    // Intialize the MapView if the element has been created the and venue loaded afterwards
    useEffect(() => {
        if (mapView) {
            return;
        }

        if (mapRef.current != null && venue != null) {
            renderVenue(mapRef.current, venue, options);
        }
    }, [venue, mapView, renderVenue, options]);

    return {mapView, elementRef};
}
