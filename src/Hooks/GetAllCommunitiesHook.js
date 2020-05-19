import { getAllCommunities } from 'Api/services/communities/methods/get-all-communities/get-all-communities';
import { useState, useEffect } from 'react'

const GetAllCommunitiesHook = () => {
  const [data, setData] = useState({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  async function fetchContent () {x
    const resp = await getAllCommunities()
    if (resp.error) return setError(resp.error)
    setData(resp)
    setLoading(false)
  }

  useEffect(() => {
    fetchContent()
  }, [])
  return [data, loading, error]
}

export { GetAllCommunitiesHook }
