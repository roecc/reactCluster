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

const statues = [
  [52.517537489850895, 13.398254730072333],
  [52.51764322256848, 13.398245864330173],
  [52.51754843582203, 13.398469319033431],
  [52.517652707394966, 13.398459292964683],
  [52.51755907328436, 13.398651251223031],
  [52.51766516401343, 13.39866734471485],
  [52.517573762376294, 13.39885778043727],
  [52.51767658884923, 13.398839005756894],
  [52.48597271328849, 13.419696539640428],
  [52.48735368591596, 13.413889557123186],
  [52.516504869796044, 13.395531177520754],
  [52.516504869796044, 13.395531177520754],
  [52.49750344324148, 13.392253518104555],
  [52.49747568362482, 13.39185118675232],
  [52.49858442174345, 13.39211940765381],
  [52.49861054778313, 13.391690254211428],
  [52.51880133254509, 13.400733321905138],
  [52.51900045159175, 13.400513380765917],
  [52.51710225545201, 13.394541442394258],
  [52.51711368078157, 13.39462459087372],
  [52.51712020954001, 13.394721150398256],
  [52.51712510610819, 13.394785523414614],
  [52.51710225545201, 13.394541442394258],
  [52.51711368078157, 13.39462459087372],
  [52.51712020954001, 13.394721150398256],
  [52.51712510610819, 13.394785523414614],
  [52.50804593132709, 13.398672044277193],
  [52.50550238135967, 13.402848243713379],
  [52.51760415105653, 13.393562436103823],
  [52.51763761055967, 13.393986225128176],
  [52.52006866090639, 13.401578217744827],
  [52.51934931577861, 13.393479287624361],
  [52.51486283349881, 13.375507146120073],
  [52.48612543090347, 13.471932560205461],
  [52.518706669075264, 13.395158350467684],
  [52.520643965322456, 13.397752046585085],
  [52.51562346629126, 13.398144990205767],
  [52.514435175802944, 13.36876541376114],
  [52.51435682585027, 13.36904972791672],
  [52.51434866438885, 13.369312584400179],
  [52.51932524219855, 13.399330526590349],
  [52.519075529030815, 13.398714959621431]
]



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
              <Popup>
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
