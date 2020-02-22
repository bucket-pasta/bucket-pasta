import React, { useState } from 'react';
import Cookies from '../interfaces/cookies.js'
import jwt, { sign } from 'jsonwebtoken';
import axios from 'axios'
import {signinBasic} from '../interfaces/authentication'

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

async function signin(username, password) {
  await signinBasic(username, password)
}



export default () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');

  const [signinsignup, setSigninsignup] = useState(true);

  function validateSignupForm() {
    return email.length > 0 && password.length > 0 && password === password2;
  }

  function validateSigninForm() {
    return email.length > 0 && password.length > 0

  }

  function handleSubmitSignup(event) {
    event.preventDefault();
    console.log({ email, password })
    signup(email, password)
  }
  function handleSubmitSignin(event) {
    event.preventDefault();
    console.log({ email, password })
    signin(email, password)
  }

  return (
    signinsignup
      ?
      (<div><h3>Sign up form</h3>
        <form onSubmit={handleSubmitSignup} key="form0">
          <input type="text" label="email" onChange={e => setEmail(e.target.value)} value={email} key="input0" />
          <input type="password" label="password" onChange={e => setPassword(e.target.value)} value={password} key="input1" />
          <input type="password" label="password2" onChange={e => setPassword2(e.target.value)} value={password2} key="input2" />

          <button disabled={!validateSignupForm()} type="submit">
            Sign-up
        </button>
          <button onClick={() => setSigninsignup(!signinsignup)}>
            switch to sign in
        </button>
          <span>Passwords match? : {`${password === password2}`}</span>
        </form>
      </div>)
      :
      (<div><h3>Sign in form</h3>
        <form onSubmit={handleSubmitSignin} key="form1">
          <input type="text" label="email" onChange={e => setEmail(e.target.value)} value={email} key="input3" />
          <input type="password" label="password" onChange={e => setPassword(e.target.value)} value={password} key="input4" />

          <button disabled={!validateSigninForm()} type="submit">
            Sign-in
        </button>
          <button onClick={() => setSigninsignup(!signinsignup)} >
            switch to sign up
        </button>
        </form>
      </div>)
  )
}
