import Map from 'react-map-gl/maplibre'
import 'maplibre-gl/dist/maplibre-gl.css'
import { MAP_STYLE_URL } from '../config/map'

export function MapView() {
  return (
    <Map
      initialViewState={{
        longitude: -51.23,
        latitude: -30.03,
        zoom: 12,
      }}
      style={{ width: '100%', height: '100vh' }}
      mapStyle={MAP_STYLE_URL}
    />
  )
}
