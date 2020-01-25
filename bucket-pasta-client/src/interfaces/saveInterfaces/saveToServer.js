import axios from 'axios';

export default (userObject, userName) => new Promise((res, rej) => {
  axios.post(`http://localhost:1234/user/update/${userName}`, userObject)
    .then(response => res(response.data))
})