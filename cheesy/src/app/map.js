'use client'

import React, { useRef, useEffect, useState } from 'react';
import "leaflet/dist/leaflet.css";

import L from "leaflet";
import Marker from "leaflet/dist/images/marker-icon.png";

import { MaptilerLayer } from "@maptiler/leaflet-maptilersdk";

const Map = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const center = { lng: -66.169243, lat: -17.380831 };
  const [zoom] = useState(18);

  useEffect(() => {
    if (map.current) return; // stops map from intializing more than once

    map.current = new L.Map(mapContainer.current, {
      center: L.latLng(center.lat, center.lng),
      zoom: zoom
    });

    const mtLayer = new MaptilerLayer({
      apiKey: "C7TEfaae3je1heNq84vt",
    }).addTo(map.current);

    const customIcon = L.icon({
      iconUrl: '/icons/marker.png', 
      iconSize: [40, 40],       
      iconAnchor: [12, 41], 
      popupAnchor: [1, -34], 
    });
    L.marker([-17.380808, -66.169416], { icon: customIcon }).addTo(map.current);

  }, [center.lng, center.lat, zoom]);

  return (
    <div className="mapWrap">
      <div ref={mapContainer} className="map"/>
    </div>
  )
}

export default Map;