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
  const [selectedRoom, setSelectedRoom] = useState("");

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
              return "#293034";
            case "CPSC 330":
              return "#FF6130";
            case "CPSC 340":
              return "#007484";
            case "CPSC 313":
              return "#821E1E";
            default:
              return "#646464";
          }
        };

        _mapView.addInteractivePolygonsForAllLocations();
        _mapView.FloatingLabels.labelAllLocations();

        const handlePolygonClick = ({ polygons, x, y }) => {
          _mapView.clearAllPolygonColors();
          if (polygons.length > 0 && polygons[0].externalId) {
            _mapView.setPolygonColor(polygons[0], getColor(polygons[0].externalId));
            setPopupPosition({ x, y });
            setPopupVisible(true);
			setSelectedRoom(polygons[0].externalId);
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

  return { mapView, popupVisible, popupPosition, selectedRoom };
}
