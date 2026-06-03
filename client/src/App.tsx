import { MapView } from './components/MapView'
import { useStdData } from './hooks/useStdData'

function App() {
  const { data, error, loading } = useStdData(3)

  return (
    <>
      <MapView />
      <div style={{ position: 'absolute', top: 8, left: 8, background: 'white', padding: 8, borderRadius: 4, fontFamily: 'monospace', fontSize: 12 }}>
        {loading && <p>Loading...</p>}
        {error && <p style={{ color: 'red' }}>Error: {error}</p>}
        {data.map(row => (
          <div key={row.cns}>
            <strong>{row.cns}</strong> — lat: {row.lat ?? 'N/A'}, lon: {row.lon ?? 'N/A'}
          </div>
        ))}
      </div>
    </>
  )
}

export default App
