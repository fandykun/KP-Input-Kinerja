//Need Refactor
const AuthHeader = (CustomHeader) => {
  const user = JSON.parse(localStorage.getItem('REACT_APP_SESSION'));
  if (user && user.token) {
    return Object.assign({ Authorization: 'Token ' + user.token }, CustomHeader);
  } else {
    return {};
  }
}

export { AuthHeader }
