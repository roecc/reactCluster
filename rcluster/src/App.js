import logo from './logo.svg';
import './App.css';

import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-markercluster";
import { Icon, L } from "leaflet";

const mIcon = new Icon ({
  iconUrl: "https://vimune.com/assets/marker.svg",
  iconSize: [32, 28],
  className: "map-icon"
}); 

function App() {
  return (
    <div id="site-container">
      <div className="logo-container header-blur">
        <img class="logo" src="https://vimune.com/assets/name-white.svg" alt="">
        </img>
        <div class="sub-t arial">connecting the dots...</div>
      </div>
      <div className="box-shadow">

      </div>


      <MapContainer 
        className="markercluster-map"
        center={[52.52, 13.411]} 
        zoom={12} 
        scrollWheelZoom={true} 
        zoomControl={false}
      >
        <TileLayer
          attribution='Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://www.openstreetmap.org/copyright">ODbL</a>.'
          url="https://stamen-tiles.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}.png"
        />

        <MarkerClusterGroup>
          <Marker position={[49.8397, 24.0297]} />
          <Marker position={[52.2297, 21.0122]} />
          <Marker position={[51.5074, -0.0901]} />
          <Marker icon={mIcon} position={[52.51, 13.411]}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
            <Marker position={[52.52, 13.421]}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
        </MarkerClusterGroup>
      </MapContainer>
    </div>

  );
}

export default App;
