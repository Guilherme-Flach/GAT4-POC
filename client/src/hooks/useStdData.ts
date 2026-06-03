import { useState, useEffect } from 'react'
import { GetStdDataResponseSchema, type PatientRowWithAddress } from '@gat4/shared'

const API_URL = import.meta.env.VITE_API_URL as string

export function useStdData(rowCount: number) {
  const [data, setData] = useState<PatientRowWithAddress[]>([])
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`${API_URL}/get-std-data?rowCount=${rowCount}`)
      .then(r => r.json())
      .then(json => {
        const parsed = GetStdDataResponseSchema.parse(json)
        setData(parsed.data)
      })
      .catch(err => setError(String(err)))
      .finally(() => setLoading(false))
  }, [rowCount])

  return { data, error, loading }
}
