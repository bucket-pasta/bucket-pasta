import React, { useState } from 'react';
import Cookies from '../interfaces/cookies.js'
import jwt, { sign } from 'jsonwebtoken';
import axios from 'axios'

const expirationTime = 14
const secret = 'thisisaverysecuresecret'

async function signup(username, password) {
  const url = '/signup'
  const jot = await axios.post(url, {
    username: username,
    password: password
  })
  //TODO: add expiration information to JWTs
  const parsedToken = jwt.verify(jot.data, secret)
  Cookies.setCookie('X-bucketpasta-auth', jot.data, expirationTime)
}

async function signinBearer(){
  const url = '/signin'
  const Authorization = `Bearer ${Cookies.getCookie('X-bucketpasta-auth')}`
  const jot = await axios.post(url, {},{headers:{Authorization}}).catch(e=>e)
  const parsedToken = jwt.verify(jot.data, secret)
  Cookies.setCookie('X-bucketpasta-auth', jot.data, expirationTime)
}

async function signinBasic(username,password){
  const url = '/signin'
  const Authorization = `Basic ${btoa(`${username}:${password}`)}`
  const jot = await axios.post(url, {},{headers:{Authorization}}).catch(e=>e)
  const parsedToken = jwt.verify(jot.data, secret)
  Cookies.setCookie('X-bucketpasta-auth', jot.data, expirationTime)
  console.log({parsedToken})
}


export default () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log({ email, password })
    signup(email,password)
    console.log(Cookies.getCookie('X-bucketpasta-auth'))
  }

  return <form onSubmit={handleSubmit}>
    <input type="text" label="email" onChange={e => setEmail(e.target.value)} value={email} />
    <input type="text" label="password" onChange={e => setPassword(e.target.value)} value={password} />
    <button disabled={!validateForm()} type="submit">
      Sign-up
        </button>
  </form>
}