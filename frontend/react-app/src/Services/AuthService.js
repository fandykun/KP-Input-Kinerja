import axios from 'axios';

const login = (username, password) => {
  return axios.post(`${process.env.REACT_APP_API_URL}auth/token/`, {
    username: username,
    password: password,
  }).then((resp) => {
    console.log(resp)
    const data = {
      token: resp.data.auth_token,
      profile: {
        username: username,
      }
    }
    localStorage.setItem('REACT_APP_SESSION', JSON.stringify(data))
    return data
  }).catch((error) => {
    console.log(error)
  })
}

const logout = () => {
  localStorage.clear()
}

const getSession = () => {
  return JSON.parse(localStorage.getItem('REACT_APP_SESSION'))
}

const AuthService = {
  login,
  logout,
  getSession,
}

export { AuthService }
