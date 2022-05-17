import logo from './logo.svg';
import './App.css';

import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-markercluster";
import { Icon, L } from "leaflet";

import Sculptures from "./sculptures.json";

const mIcon = new Icon ({
  iconUrl: "https://vimune.com/assets/marker.svg",
  iconSize: [42, 36.4],
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

        <MarkerClusterGroup
          disableClusteringAtZoom={17}
        >
          <Marker icon={mIcon} position={[52.2297, 21.0122]} />
          
          {Sculptures.map(sculpture => (
            <Marker 
              icon={mIcon}
              position={sculpture.location}
            >
              <Popup
                onOpen={()=>window['load3D'](sculpture.sketchfabID)}
              >
                <iframe src="" id="api-frame" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
                <h2>
                  {sculpture.name}
                </h2>
              </Popup>

            </Marker>
          ))}
        </MarkerClusterGroup>
      </MapContainer>
    </div>

  );
}

export default App;
