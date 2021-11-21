'use strict'
// DON'T FORGET TO EXPORT
// store object to share with different files
const store = require('../store')
// const events = require('./events')
// success and failure functions so it can display on site if it messes up or not

// sign up success

const signUpSuccess = function (responseData) {
  // tell the user it was successful
  $('#bro-display').text('Signed up successfully, High-Five!')
  $('#bro-display').removeClass()
  $('#bro-display').addClass('text-success')
  // reset all of the forms
  $('form').trigger('reset')
  console.log('responseData is', responseData)
}
// sign up failure

const signUpFailure = function (error) {
  // tell the user it was failure
  $('#error-message').text('Sign up failed, Bro... :(')
  // remove existing classes, then make it red with bootstrap
  $('#error-message').removeClass()
  $('#error-message').addClass('text-danger')
  // print the error
  console.error('error is', error)
}

// sign in success

const signInSuccess = function (responseData) {
  // add the user from response data in store for their token we can get in api
  store.user = responseData.user
  console.log('store is', store)

  $('#bro-display').text('Signed in successfully Bro!')

  $('#bro-display').removeClass()
  $('#bro-display').addClass('text-info')
  // clear forms
  $('form').trigger('reset')

  // hide before sign in section
  $('#before-sign-in').hide()
  // show after sign in section
  $('#after-sign-in').show()
  $('#new-game-button').show()
  console.log('responseData is', responseData)
}

// sign in fail;ure

const signInFailure = function (error) {
  // tell the user it was failure
  $('#error-message').text('Sign in failed :( sowwy Bro')
  // make red
  $('#error-message').removeClass()
  $('#error-message').addClass('text-danger')
  // print error
  console.error('error is', error)
}

// sign out success

const signOutSuccess = function (responseData) {
  // tell user
  $('#bro-display').text("Signed Out successfully... I'll miss you...")
  // make text green
  $('#bro-display').removeClass()
  $('#bro-display').addClass('text-info')
  $('form').trigger('reset')
  // show before sign in and hide after sign in
  $('#before-sign-in').show()
  $('#after-sign-in').hide()
  $('#new-game-button').hide()
  $('.game-board').hide()

  console.log('responseData is', responseData)
}
// sign out failure

const signOutFailure = function (error) {
  $('#error-message').text('Signing out failed! >:( ')
  // make text red
  $('#error-message').removeClass()
  $('#error-message').addClass('text-danger')
  console.error('error is', error)
}

const changePasswordSuccess = function (responseData) {
  // tell the user it was successful
  $('#movies-display').text('Changed password successfully!')

  // remove existing classes, then add a green text-success class from bootstrap
  $('#movies-display').removeClass()
  $('#movies-display').addClass('text-success')

  // clear (reset) all of the forms
  $('form').trigger('reset')

  console.log('responseData is', responseData)
}

const changePasswordFailure = function (error) {
  // tell the user it was failure
  $('#error-message').text('Changing passwords failed! >:( ')

  // remove existing classes, then add a red text-danger class from bootstrap
  $('#error-message').removeClass()
  $('#error-message').addClass('text-danger')

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
