import axios from 'axios';

export default (setClipboard, userName) => {
  axios.get(`http://localhost:1234/clipboard`)
    .then(res => {
      const clipboardResponse = res.data.data.tabs;
      setClipboard(clipboardResponse);
    })
}
