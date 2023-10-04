const BASE_URL = 'https://backend-book-list-app.onrender.com'

const endpoints = {
  library: `${BASE_URL}/library`,
  users: `${BASE_URL}/users`,
  user: (email, password) => `${BASE_URL}/users?email=${email}&&password=${password}` 
}

export default endpoints