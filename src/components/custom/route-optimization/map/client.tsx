"use client";

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import { MapProps } from "@/lib/types/route-optimization";
import { mapDefaults } from "@/lib/types/constants";
import MapUtilities from "./utilities";

const MapComponent = ({ card }: MapProps) => {
  const zoom = mapDefaults.zoom;

  return (
    <MapContainer
      center={card.journey.route[0]}
      zoom={zoom}
      scrollWheelZoom={true}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        attribution=""
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MapUtilities card={card} />
      <Marker position={card.journey.route[0]} draggable={true}>
        <Popup>Start Point</Popup>
      </Marker>
      <Marker
        position={card.journey.route[card.journey.route.length - 1]}
        draggable={true}
      >
        <Popup>End Point</Popup>
      </Marker>
      <Polyline positions={card.journey.route} />
    </MapContainer>
  );
};

export default MapComponent;
