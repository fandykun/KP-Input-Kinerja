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
      },
      timestamp: new Date().getTime(),
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

const getSession = () => { //remove session if too old or dont have timestamp
  const data =  JSON.parse(localStorage.getItem('REACT_APP_SESSION'))
  const now = new Date().getTime();
  if (!data || !data.timestamp) {
    logout()
    return null
  } else {
    const diff = now - data.timestamp;
    console.log(diff)
    if (diff > 86400000) {
      logout()
      return null
    }
    localStorage.setItem('REACT_APP_SESSION', JSON.stringify({...data, timestamp: now}))
    return data
  }
}

const AuthService = {
  login,
  logout,
  getSession,
}

export { AuthService }
