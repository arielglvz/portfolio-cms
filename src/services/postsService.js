// API
const API_URL = "https://jsonplaceholder.typicode.com/posts"

export const getPosts = async (signal) => {
  const response = await fetch(API_URL, {
    signal,
  })

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`)
  }

  const result = await response.json()

  return result
}
