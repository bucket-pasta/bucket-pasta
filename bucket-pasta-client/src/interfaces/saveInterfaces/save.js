// this will be the save interface caller
import saveToServer from './saveToServer.js'
import saveToLocalStorage from './saveToLocalStorage'

export default (objectBeingSaved, userName, saveToWhere) => new Promise((res,rej) => {
    switch(saveToWhere) {
        case "server":
          saveToServer(objectBeingSaved, userName)
          .then(response => res(response))
          break;
        case "localStorage":
          saveToLocalStorage(objectBeingSaved)
          .then(response => res(response))
        break;
        default:
          rej('save location not specified correctly')
      }
})