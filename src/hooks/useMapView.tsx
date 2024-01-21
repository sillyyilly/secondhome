import { useState, useEffect } from "react";
import {
  E_SDK_EVENT,
  Mappedin,
  MapView,
  showVenue,
  TShowVenueOptions
} from "@mappedin/mappedin-js";

interface PopupPosition {
  x: number;
  y: number;
}

export default function useMapView(
  el: HTMLElement | null,
  venue: Mappedin | undefined,
  options?: TShowVenueOptions
) {
  const [mapView, setMapView] = useState<MapView | undefined>();
  const [popupVisible, setPopupVisible] = useState(false);
  const [popupPosition, setPopupPosition] = useState<PopupPosition>({ x: 0, y: 0 });

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
              return "#646464";
          }
        };

        _mapView.addInteractivePolygonsForAllLocations();
        _mapView.FloatingLabels.labelAllLocations({ interactive: true });

        const handlePolygonClick = ({ polygons, x, y }) => {
          _mapView.clearAllPolygonColors();
          if (polygons.length > 0 && polygons[0].externalId) {
            _mapView.setPolygonColor(polygons[0], getColor(polygons[0].externalId));
            setPopupPosition({ x, y });
            setPopupVisible(true);
          } else {
            setPopupVisible(false);
          }
        };

        _mapView.on(E_SDK_EVENT.CLICK, handlePolygonClick);

        setMapView(_mapView);
      } catch (e) {
        setMapView(undefined);
      }
    }

    renderVenue();

    // Cleanup function
    return () => {
      if (mapView) {
        mapView.destroy();
      }
    };
  }, [el, venue, options, mapView]);

  return { mapView, popupVisible, popupPosition };
}
