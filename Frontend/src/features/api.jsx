import axios from 'axios'

// Define the BASE_URL of the API
const BASE_URL = 'http://localhost:3001/api/v1'

const apiEndpoints = {
  signIn: () => `${BASE_URL}/user/login`,
  userInfo: () => `${BASE_URL}/user/profile`
}

// Asynchrone function for user auth
export async function login(data) {
  const resp = await axios.post(apiEndpoints['signIn'], {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      email: data.email,
      password: data.password
    })
  })

  return resp.json()
}

export async function userInfos(token) {
  const resp = await axios.post(apiEndpoints['userInfo'], {
    header: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    }
  })

  return resp.json()
}
