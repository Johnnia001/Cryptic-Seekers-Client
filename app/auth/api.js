'use strict'
// DON'T FORGET TO EXPORT
// make config
const config = require('../config')
// make store const
const store = require('../store')
// sign up
const signUp = function (formData) {
  return $.ajax({
    url: `${config.apiUrl}/sign-up`,
    method: 'POST',
    data: formData
  })
}
// sign in
const signIn = function (formData) {
  return $.ajax({
    url: `${config.apiUrl}/sign-in`,
    method: 'POST',
    data: formData
  })
}
// sign out
const signOut = function () {
  return $.ajax({
    url: `${config.apiUrl}/sign-out`,
    method: 'DELETE',

    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}
const changePassword = function (formData) {
  // make a request to PATCH /change-password
  return $.ajax({
    url: `${config.apiUrl}/change-password`,
    method: 'PATCH',
    // make sure to send the formData along as the body of our request
    // this is similar to --data in the curl script
    data: formData,
    // Add our authorization header, so the api can use the token
    // to know who is trying to change the password
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

module.exports = {
  signUp,
  signIn,
  signOut,
  changePassword
}
