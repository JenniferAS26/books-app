import axios from 'axios'
import endpoints from './endpoints'

const getBooks = async () => {
  try {
    const { data } = await axios.get(endpoints.library)
    return data
  } catch (error) {
    console.warn(error)
    return null
  }
}

export { getBooks }