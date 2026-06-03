import { useState, useRef } from 'react'
import { Marker } from 'react-map-gl/maplibre'
import { type PatientRowWithAddress } from '@gat4/shared'
import { MarkerTooltip } from './MarkerTooltip'
import './MapMarker.css'

interface Props {
  row: PatientRowWithAddress & { lat: number; lon: number }
}

function Pin() {
  return (
    <svg width="24" height="32" viewBox="0 0 24 32" fill="none">
      <path
        d="M12 0C5.373 0 0 5.373 0 12c0 9 12 20 12 20S24 21 24 12C24 5.373 18.627 0 12 0z"
        fill="#e53e3e"
      />
      <circle cx="12" cy="12" r="5" fill="white" />
    </svg>
  )
}

export function MapMarker({ row }: Props) {
  const [visible, setVisible] = useState(false)
  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const show = () => {
    if (hideTimer.current) clearTimeout(hideTimer.current)
    setVisible(true)
  }

  const hide = () => {
    hideTimer.current = setTimeout(() => setVisible(false), 40)
  }

  return (
    <Marker latitude={row.lat} longitude={row.lon} anchor="bottom">
      <div onMouseEnter={show} onMouseLeave={hide} className="map-marker-container">
        <Pin />
        {visible && <MarkerTooltip row={row} />}
      </div>
    </Marker>
  )
}
