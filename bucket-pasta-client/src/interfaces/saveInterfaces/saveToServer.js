import axios from 'axios';
import { generateAuthHeader } from '../authentication'

export default (userObject) => new Promise((res, rej) => {
  const authHeader = generateAuthHeader()
  console.log('THIS THE OBJ THO', userObject)
  axios.post(`/api/v1/userData/`, userObject, { headers: { ...authHeader } })
    .then(response => res(response.data))
    .catch(err => rej(err))
})


//TODO: Authenticate these posts 

