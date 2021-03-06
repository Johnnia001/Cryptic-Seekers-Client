'use strict'
// DON'T FORGET TO EXPORT
// store object to share with different files
const store = require('../store')
// const events = require('./events')
// success and failure functions so it can display on site if it messes up or not

// sign up success

const signUpSuccess = function (responseData) {
  // tell the user it was successful
  $('#success-display').text('Signed up successfully')
  $('#success-display').removeClass()
  $('#success-display').addClass('text-success')
  // reset all of the forms
  $('form').trigger('reset')
}
// sign up failure

const signUpFailure = function (error) {
  // tell the user it was failure
  $('#error-message').text('Sign up failed, are you a robot?')
  // remove existing classes, then make it red with bootstrap
  $('#error-message').removeClass()
  $('#error-message').addClass('text-danger')
  $('form').trigger('reset')
  setTimeout(function () {
    $('#error-message').removeClass()
  }, 5000)
  // print the error
  console.error('error is', error)
}

// sign in success

const signInSuccess = function (responseData) {
  // add the user from response data in store for their token we can get in api
  store.user = responseData.user

  $('#success-display').text('Signed in successfully! Don\'t wonder too far')

  $('#success-display').removeClass()
  $('#success-display').addClass('text-info')
  // clear forms
  $('form').trigger('reset')

  // hide before sign in section
  $('#before-sign-in').hide()
  // show after sign in section
  $('#after-sign-in').show()
}

// sign in fail;ure

const signInFailure = function (error) {
  // tell the user it was failure
  $('#error-message').text('Sign in failed... did the chupacabra eat your password?')
  // make red
  $('#error-message').removeClass()
  $('#error-message').addClass('text-danger')
  $('form').trigger('reset')
  setTimeout(function () {
    $('#error-message').removeClass()
  }, 5000)
  // print error
  console.error('error is', error)
}

// sign out success

const signOutSuccess = function (responseData) {
  // tell user
  $('#success-display').text('Signed Out successfully... TRUST NO ONE.')
  // make text green
  $('#success-display').removeClass()
  $('#success-display').addClass('text-info')
  $('form').trigger('reset')
  // show before sign in and hide after sign in
  $('#before-sign-in').show()
  $('#after-sign-in').hide()
}
// sign out failure

const signOutFailure = function (error) {
  $('#error-message').text('Signing out failed... suspicious. ')
  // make text red
  $('#error-message').removeClass()
  $('#error-message').addClass('text-danger')
  $('form').trigger('reset')
  setTimeout(function () {
    $('#error-message').removeClass()
  }, 5000)
  console.error('error is', error)
}

const changePasswordSuccess = function (responseData) {
  // tell the user it was successful
  $('#movies-display').text('Changed password successfully. who are you running from?')

  // remove existing classes, then add a green text-success class from bootstrap
  $('#movies-display').removeClass()
  $('#movies-display').addClass('text-success')

  // clear (reset) all of the forms
  $('form').trigger('reset')
}

const changePasswordFailure = function (error) {
  // tell the user it was failure
  $('#error-message').text('Changing passwords failed. ')

  // remove existing classes, then add a red text-danger class from bootstrap
  $('#error-message').removeClass()
  $('#error-message').addClass('text-danger')
  $('form').trigger('reset')
  setTimeout(function () {
    $('#error-message').removeClass()
  }, 5000)
  // print the error
  console.error('error is', error)
}
module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure
}
