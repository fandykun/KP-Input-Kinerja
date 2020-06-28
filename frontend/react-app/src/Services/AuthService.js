const login = (username, password) => {
  const resp = {
    profile: {
      username: username,
    },
    token: password,
  }
  localStorage.setItem('session', JSON.stringify(resp))
  return (resp)
  //axios part
}

const logout = () => {
  localStorage.clear()
}

const getSession = () => {
  return JSON.parse(localStorage.getItem('session'))
}

const AuthService = {
  login,
  logout,
  getSession,
}

export { AuthService }
