// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const authEvents = require('./auth/event')
const storyEvent = require('./Story/event')
const commentEvent = require('./comment/event')
$(() => {
  // AUTH
  // sign up
  $('#sign-up').on('submit', authEvents.onSignUp)
  // sign in
  $('#sign-in').on('submit', authEvents.onSignIn)
  // sign out
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('#sign-out').on('click', authEvents.onSignOut)
  // change pass word
  $('#change-password').on('submit', authEvents.onChangePassword)
  // STORY
  $('#post-story').on('submit', storyEvent.onCreateStory)
  $('#story-index').on('submit', storyEvent.onIndexStory)
  $('#post-story').on('submit', storyEvent.onShowStory)
  $('#stories-delete').on('submit', storyEvent.onDeleteStory)
  $('#stories-update').on('submit', storyEvent.onUpdateStory)
  // delete story
  $('#story-display').on(
    'click',
    '.story-destroy-dynamic',
    storyEvent.onDynamicDestroyStory
  )
  // update story
  $('#story-display').on(
    'click',
    '.story-update-dynamic',
    storyEvent.onDynamicUpdateStory
  )
  $('#story-display').on(
    'submit',
    '.update-single-story',
    storyEvent.onDynamicUpdateStoryPartTwo
  )
  // comment
  $('#story-display').on(
    'click',
    '.story-comment-dynamic',
    commentEvent.onDynamicCommentStory
  )
  $('#story-display').on(
    'submit',
    '.comment-form',
    commentEvent.onDynamicCommentStoryPartTwo
  )
})
