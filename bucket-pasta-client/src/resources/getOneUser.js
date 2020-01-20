import axios from 'axios';

// username is for future feature
export default (setUserObject, userName, setHasGetRun) => {
  axios.get(`http://localhost:1234/clipboard`)
    .then(res => {
      const clipboardResponse = res.data;
      setUserObject(clipboardResponse);
      setHasGetRun(true);
    })
}
