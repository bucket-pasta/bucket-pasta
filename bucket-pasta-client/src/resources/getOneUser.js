import axios from 'axios';

// username is for future feature
export default (setClipboard, userName) => {
  axios.get(`http://localhost:1234/clipboard`)
    .then(res => {
      const clipboardResponse = res.data;
      setClipboard(clipboardResponse);
    })
}
