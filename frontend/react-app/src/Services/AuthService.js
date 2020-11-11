import axios from 'axios';

const login = async (username, password) => {
  // const dummy = {
  //   token: "12345",
  //   profile: {
  //     username: username,
  //   }
  // }
  // localStorage.setItem('REACT_APP_SESSION', JSON.stringify(dummy))
  // return dummy;
  try {
    const resp = await axios.post(`${process.env.REACT_APP_API_URL}login/`, { username : username, password : password })
    const data = {
      token: resp.data.token,
      profile: {
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
