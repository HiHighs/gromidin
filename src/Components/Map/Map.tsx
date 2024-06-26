import { useEffect, useRef } from 'react';
import L, { LatLngTuple } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import styles from './Map.module.css';

function Map({ address }: { address: string }) {
  const mapRef = useRef<HTMLDivElement>(null);
  const map = useRef<L.Map | null>(null);

  useEffect(() => {
    if (mapRef.current && !map.current) {
      map.current = L.map(mapRef.current, {
        attributionControl: false,
        scrollWheelZoom: false,
      }).setView([51.505, -0.09] as LatLngTuple, 13);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors',
      }).addTo(map.current);
    }

    // Geocode the address using OpenStreetMap's Nominatim service
    fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${address}`)
      .then((response) => response.json())
      .then((data) => {
        if (data && data.length > 0) {
          const { lat, lon } = data[0];
          const location: LatLngTuple = [parseFloat(lat), parseFloat(lon)];

          map.current?.eachLayer((layer) => {
            if (layer instanceof L.Marker) {
              map.current?.removeLayer(layer);
            }
          });

          if (map.current) {
            L.marker(location)
              .addTo(map.current)
              .bindPopup(address)
              .openPopup();
            map.current.setView(location, 13);
          }
        } else {
          console.error('Geocode was not successful');
        }
      })
      .catch((error) => {
        console.error('Error fetching geocode:', error);
      });
  }, [address]);

  return <div className={styles.map} ref={mapRef}></div>;
}

export default Map;
