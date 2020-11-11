//Need Refactor
const AuthHeader = () => {
  const user = JSON.parse(localStorage.getItem('REACT_APP_SESSION'));
  if (user && user.token) {
    return { Authorization: 'Token ' + user.token };
  } else {
    return {};
  }
}

export { AuthHeader }
