export default (userObject, userName) => {
  let userObjectString = JSON.stringify(userObject, userName);
  localStorage.setItem('userObject', userObjectString);
}