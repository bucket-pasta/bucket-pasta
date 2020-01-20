import axios from 'axios';

// username is for future feature
export default (userObject, userName) => {
  axios.post(`http://localhost:1234/user/update/${userName}`, userObject)
    .then(res => {
      console.log(res.data);
    })
}
