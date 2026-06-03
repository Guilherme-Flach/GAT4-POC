import Map from 'react-map-gl/maplibre'
import 'maplibre-gl/dist/maplibre-gl.css'
import { type PatientRowWithAddress } from '@gat4/shared'
import { MAP_STYLE_URL } from '../config/map'
import { MapMarker } from './MapMarker'
import './MapView.css'

interface Props {
  markers?: PatientRowWithAddress[]
}

export function MapView({ markers = [] }: Props) {
  return (
    <div className="map-view">
      <Map
        initialViewState={{
          longitude: -51.23,
          latitude: -30.03,
          zoom: 12,
        }}
        style={{ width: '100%', height: '100%' }}
        mapStyle={MAP_STYLE_URL}
      >
        {markers
          .filter(row => row.lat !== null && row.lon !== null)
          .map(row => (
            <MapMarker key={row.cns} row={row as PatientRowWithAddress & { lat: number; lon: number }} />
          ))}
      </Map>
    </div>
  )
}
