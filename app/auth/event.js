'use strict'
// DON'T FORGET TO EXPORT

// put in require constants
const getFormFields = require('../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

// Sign up
const onSignUp = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)

  api.signUp(formData).then(ui.signUpSuccess).catch(ui.signUpFailure)
}
// sign in

const onSignIn = function (event) {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)

  api.signIn(formData).then(ui.signInSuccess).catch(ui.signInFailure)
}
// sign out
const onSignOut = function () {
  api.signOut().then(ui.signOutSuccess).catch(ui.signOutFailure)
}
const onChangePassword = function (event) {
  // prevent the default action of refreshing the page
  event.preventDefault()

  // event.target is the form that caused the 'submit' event
  const form = event.target
  // get the data from our form element
  const formData = getFormFields(form)

  // make a PATCH /change-password request, pass it the old and new passwords
  api
    .changePassword(formData)
  // if our change password request is successful, run the changePasswordSuccess function
    .then(ui.changePasswordSuccess)
  // otherwise, if an error occurred, run a changePasswordFailure function
    .catch(ui.changePasswordFailure)
}
module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onChangePassword
}
