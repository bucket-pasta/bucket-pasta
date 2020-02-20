import React from 'react'
import Cookies from '../interfaces/cookies.js'
import axios from 'axios'
import jwt, { sign } from 'jsonwebtoken';

//TODO: backend server needs to vend the actual expiration in addition to its issue date
const expirationTime = 14
const secret = process.env.SECRET || 'thisisaverysecuresecret'


function generateAuthHeader() {
    // check if users auth is still valid
    const cookie = Cookies.getCookie('X-bucketpasta-auth');
    // if valid token in cookies pass
    // else create valid token in cookies
    if (!cookie) {
        try {
            //TODO: figure out a 1 time token type of deal to reference here 
            signinBearer()
        }
        catch{
            try {
                //TODO: redirect to username pass login
                // this is bad and I feel bad
                const username = alert('Username:')
                const password = alert('password')
                signinBasic(username, password)
            }
            catch{
                console.error('unable to log you in at this time')
            }
        }
    }

    return { Authorization: `Bearer ${Cookies.getCookie('X-bucketpasta-auth')}` }
}

async function signinBearer(bearerToken) {
    const url = '/signin'
    const Authorization = `Bearer ${bearerToken}`
    const jot = await axios.post(url, {}, { headers: { Authorization } }).catch(e => e)
    const parsedToken = jwt.verify(jot.data, secret)
    Cookies.setCookie('X-bucketpasta-auth', jot.data, expirationTime)
    console.log(parsedToken)
}

async function signinBasic(username, password) {
    const url = '/signin'
    const Authorization = `Basic ${btoa(`${username}:${password}`)}`
    const jot = await axios.post(url, {}, { headers: { Authorization } }).catch(e => e)
    const parsedToken = jwt.verify(jot.data, secret)
    Cookies.setCookie('X-bucketpasta-auth', jot.data, expirationTime)
    console.log({ parsedToken })
}
export { generateAuthHeader, signinBasic }