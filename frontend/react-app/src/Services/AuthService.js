import axios from 'axios';

const login = async (username, password) => {
  try {
    const resp = await axios.post(`${process.env.REACT_APP_API_URL}login/`, { username : username, password : password })
    const data = {
      token: resp.data.token,
      isAdmin: resp.data.is_admin,
      profile: {
        nama: resp.data.nama,
        username: username,
      }
    }
    localStorage.setItem('REACT_APP_SESSION', JSON.stringify(data))
    return data
  }
  catch (error) {
    console.log(error)
  }
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
