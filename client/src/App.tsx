import { MapView } from './components/MapView'
import { useStdData } from './hooks/useStdData'
import './App.css'

function App() {
  const { data, error, loading } = useStdData(3)

  return (
    <>
      <MapView markers={data} />

      <div className="app-debug">
        {loading && <p>Loading...</p>}
        {error && <p className="app-error">Error: {error}</p>}
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
