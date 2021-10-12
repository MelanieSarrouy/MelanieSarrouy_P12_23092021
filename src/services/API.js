// IMPORTS // ______________________________________________________________

import axios from 'axios'
import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'


// HOOK // ______________________________________________________________

axios.defaults.baseURL = './user/'

/**
 * personnalized hook with Api's url in params for storing data fetched
 * @param {string} url 
 * @returns {object}
 */

export function useFetch(url) {
  const [data, setData] = useState({})
  const [isLoading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    if (!url) return
    setLoading(true)
    async function fetchData() {
      try {
        const response = await axios.get(url)
        const data = response.data.data
        setData(data)
      } catch (err) {
        console.log(err)
        setError(true)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [url])

  return { data, isLoading, error }
}

// PROPTYPES // ___________________________________________________________

useFetch.propTypes = {
  url: PropTypes.string
}
