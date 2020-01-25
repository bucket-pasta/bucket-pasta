import loadFromServer from './loadFromServer.js'
import loadFromLocalStorage from './loadFromLocalStorage.js'
export default (userName, setHasGetRun, loadFromWhere) => new Promise((res, rej) => {
  try {
    switch (loadFromWhere) {
      case "server":
        loadFromServer(userName)
          .then(response => {
            console.log('oof this finished')
            res(response)
          })
        break;
      case "localStorage":
      loadFromLocalStorage();
      res(JSON.parse(localStorage.getItem('userObject')));
        break;
      default:
        rej('save location not specified correctly')
    }
  }
  catch{
    console.log({ userName, setHasGetRun, loadFromWhere })
  }
})