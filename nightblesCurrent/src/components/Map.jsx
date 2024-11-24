import React, { useEffect } from 'react';
import tt from '@tomtom-international/web-sdk-maps'

function Map() {
  const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = 'https://api.tomtom.com/maps-sdk-for-web/cdn/6.x/6.5.0/maps/maps.css';
    document.head.appendChild(link);
  useEffect(() => {
    // Funzione per caricare la mappa una volta che il componente è stato montato
    //const loadMap = () => {
      let center = [9.200420, 45.474068];
      // Inizializza la mappa utilizzando il tuo API Key di TomTom
      const map = tt.map({
        key: 'jKSFnRSYQMbNShEZwLzQkHUBODWwI4Gz',
        container: 'map',
        center: center,
        zoom: 12,
      });

      // Puoi aggiungere marker o altre personalizzazioni della mappa qui

    //};

    // Carica la mappa quando il componente è montato
    map.on('load',() =>{
      new tt.Marker().setLngLat(center).addTo(map);
    })
    
  }, []);

  return (
    <div style={{ width: '100%', height:"400px"}} id="map"></div>
  );
}

export default Map;
