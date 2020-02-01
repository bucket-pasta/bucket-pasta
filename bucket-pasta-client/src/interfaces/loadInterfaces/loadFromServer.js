import axios from 'axios';

// username is for future feature
export default (userName) => new Promise((res, rej) => {
  axios.get(`http://localhost:3001/clipboard/${userName}`)
    .then(response => {
      const clipboardResponse = response.data;
      res(clipboardResponse)
    })
})
