import axios from 'axios'
import endpoints from './endpoints'

const getUserByQueryParams = async (email, password) => {
  try {
    const { data } = await axios.get(endpoints.user(email, password))
    console.log(data)
    return data.length ? data[0] : null
  } catch (error) {
    console.warn(error)
    return null
  }
}

export { getUserByQueryParams }