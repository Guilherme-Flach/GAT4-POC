import Map, { Marker } from 'react-map-gl/maplibre'
import 'maplibre-gl/dist/maplibre-gl.css'
import { type PatientRowWithAddress } from '@gat4/shared'
import { MAP_STYLE_URL } from '../config/map'

interface Props {
  markers?: PatientRowWithAddress[]
}

export function MapView({ markers = [] }: Props) {
  return (
    <Map
      initialViewState={{
        longitude: -51.23,
        latitude: -30.03,
        zoom: 12,
      }}
      style={{ width: '100%', height: '100vh' }}
      mapStyle={MAP_STYLE_URL}
    >
      {markers
        .filter(row => row.lat !== null && row.lon !== null)
        .map(row => (
          <Marker key={row.cns} latitude={row.lat!} longitude={row.lon!} />
        ))}
    </Map>
  )
}
