// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const authEvents = require('./auth/event')
const storyEvent = require('./Story/event')
$(() => {
  // your JS code goes here
  // sign up
  $('#sign-up').on('submit', authEvents.onSignUp)
  // sign in
  $('#sign-in').on('submit', authEvents.onSignIn)
  // sign out
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('#sign-out').on('click', authEvents.onSignOut)
  // change pass word
  $('#change-password').on('submit', authEvents.onChangePassword)
  // create story
  $('#post-story').on('submit', storyEvent.onCreateStory)
  $('#sign-in').on('submit', storyEvent.onIndexStory)
  $('#post-story').on('submit', storyEvent.onShowStory)
  $('#stories-delete').on('submit', storyEvent.onDeleteStory)
  $('#stories-update').on('submit', storyEvent.onUpdateStory)
})
