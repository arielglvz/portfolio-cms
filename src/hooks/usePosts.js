import { useEffect, useState } from "react"
import { getPosts } from "../services/postsService"

export const usePosts = () => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    const controller = new AbortController()
    const { signal } = controller

    console.log(signal)
    const fetchData = async () => {
      try {
        const result = await getPosts(signal)

        setData(result)
      } catch (err) {
        if (err.name === "AbortError") {
          return
        }

        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  return { loading, data, error }
}
