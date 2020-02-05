import React from 'react';
import Cookies from '../interfaces/cookies.js'
import jwt from 'jsonwebtoken';


function loginHandler(e) {
    e.preventDefault()
    // try to log in
    //parse the server response into its JWT
    // mocked token here
    let authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVVUlEIjoiNTE3MDlkYTMtMzBmZi00YTVlLTlkNGQtN2U2MDljNWU5NWMzIiwibmFtZSI6IkxlZS1Sb3kgS2luZyIsInN0YXR1cyI6IlJFUExJQ0FOVCIsInRhYnMiOlt7InRleHQiOiJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc3VsIGNvcGlvc2FlIG1lbCBhdC4gU2l0IG5vIGVsaXRyIGRldHJhY3RvIHNjcmlwc2VyaXQsIGVhIHByaSBkaWN1bnQgY29waW9zYWUgaXJhY3VuZGlhLCBpbGx1ZCBhZXRlcm5vIHBlcnNlcXVlcmlzIHVzdSBlaS4gRGljYW0gZ3ViZXJncmVuIHBybyBhdCwgcmVnaW9uZSBwcmFlc2VudCBhZGlwaXNjaW5nIG5lYyB0ZSwgbWVudGl0dW0gb3BvcnRlcmUgdmVsIGV1LiBBZG1vZHVtIG1vbGVzdGlhZSBldSBwZXIuIFZpbSBldCBkaWFtIGVzc2VudCByZWZvcm1pZGFucy4gVGUgbmVjIGZlcnJpIGxhYml0dXIgaW1wZXJkaWV0LCBubyB1bnVtIGZ1aXNzZXQgZXN0LiJ9LHt9LHt9XX0.u8GyyBc80gxhutTi2YY7PcWnzpdIj_dHDKaFa015Y2I'
    jwt.verify(authToken, 'ultrasecret', function (err, decoded) {
        if (err) { throw err }
        console.log(decoded) // bar
    });
    jwt.verify(authToken, 'wrongsecret', function (err, decoded) {
        if (err) { throw err }
        console.log(decoded) // bar
    });
    Cookies.setCookie('X-bucketpasta-auth', authToken, 14)
}

export default () => <form>
    <input type="text" label="username" />
    <input type="text" label="password" />
    <button onClick={loginHandler}>Log in</button>
</form>