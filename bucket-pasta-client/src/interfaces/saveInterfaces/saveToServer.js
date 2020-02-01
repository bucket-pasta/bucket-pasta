import axios from 'axios';

export default (userObject, userName) => new Promise((res, rej) => {
  axios.post(`/user/update/${userName}`, userObject)
    .then(response => res(response.data))
})