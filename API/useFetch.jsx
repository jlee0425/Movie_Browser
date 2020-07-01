import React, { useState, useEffect } from 'react'
import axios from 'axios'

const useFetch = (url, option, apiKey) => {
  const [response, setResponse] = useState(null)
  const [error, setError] = useState(null)
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    const fetchData = async () => {
      try {
        const res = await axios.get(`${url}/${option}/api_key=${apiKey}`)
        console.log('res', res)
        const result = await res.json()
        setResponse(result)
        setLoading(false)
      } catch (error) {
        setError(error)
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  return { response, error, isLoading }
}

export default useFetch
