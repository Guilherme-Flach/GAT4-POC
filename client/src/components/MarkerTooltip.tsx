import { type PatientRowWithAddress } from '@gat4/shared'
import './MarkerTooltip.css'

interface Props {
  row: PatientRowWithAddress
}

export function MarkerTooltip({ row }: Props) {
  return (
    <div
      onWheel={e => e.stopPropagation()}
      className="marker-tooltip"
    >
      {JSON.stringify(row, null, 2)}
    </div>
  )
}
