'use strict'
const onCreateStorySuccess = function (responseData) {
  // extract the story object from our response's data
  const story = responseData.story
  console.log(responseData)

  // create the html to display a single story
  const storyHtml = `
    <div>
      <h4>Title: ${story.title}</h4>
      <p>Author: ${story.owner}</p>
      <p>Encounter: ${story.message}</p>
       <button class='story-destroy-dynamic' data-id=${story._id}>Delete Post</button>
      <br>
    </div>
  `

  // for the div with the id story-display,
  // set its html to be our story's html
  $('#story-display').html(storyHtml)

  $('form').trigger('reset')
}

// ERROR
const onError = function (err) {
  // if an error occurs, we will log the error (err)
  console.error(err)

  $('#error-message').text('Something went wrong, please try again')
  // make our error-message red, by adding the bootstrap text-danger class
  $('#error-message').addClass('text-danger')

  // after 5 seconds (5000 milliseconds), run our callback function
  setTimeout(() => {
    // remove the message from books-display
    $('#error-message').html('')
    // remove the red color caused by `text-danger`
    $('#error-message').removeClass('text-danger')
  }, 5000)

  $('form').trigger('reset')
}

const onIndexSuccess = function (responseData) {
  $('#success-display').text('All Stories successfully received')
  $('#success-display').removeClass()
  console.log('onIndexSuccess ran. responseData is :', responseData.stories)

  let storiesHtml = ''
  const stories = responseData.stories
  stories.forEach((story) => {
    storiesHtml += `
    <div>
      <h4>Title: ${story.title}</h4>
      <p>Author: ${story.owner}</p>
      <p>Encounter: ${story.message}</p>
      <button class='story-destroy-dynamic' data-id=${story._id}>Delete Post</button>
    </div>
  `

    // for the div with the id story-display,
    // set its html to be our story's html
    $('#stories-display').html(storiesHtml)

    $('form').trigger('reset')
  })
  $('#story-display').html(storiesHtml)
}

const onIndexFailure = function (error) {
  $('#error-message').text('Error on getting stories')
  $('#error-message').removeClass()
  $('#error-message').addClass('text-danger')
  console.error('onIndexFailure ran. Error is :', error)
}

/* const onShowSuccess = function (responseData) {
  $('#success-display').text('One Story successfully received')
  $('#success-display').removeClass()
  $('#success-display').addClass('text-success')
  console.log('onShowSuccess ran. responseData is :', responseData)
  $('form').trigger('reset')

  const story = responseData.story
  $('#stories-display').html(`
     <div>
      <h4>Title: ${story.title}</h4>
      <p>Author: ${story.owner}</p>
      <p>Encounter: ${story.message}</p>
    </div>
  `)
}

const onShowFailure = function (error) {
  $('#error-message').text('Error on getting story')
  $('#error-message').removeClass()
  $('#error-message').addClass('text-danger')
  console.error('onShowFailure ran. Error is :', error)
} */

const onDeleteSuccess = function () {
  $('#success-display').text('Story successfully deleted')
  $('#success-display').removeClass()
  $('#success-display').addClass('text-success')
  $('form').trigger('reset')
  console.log('Story successfully deleted')
}

const onDeleteFailure = function (error) {
  $('#error-message').text('Error on deleting story')
  $('#error-message').removeClass()
  $('#error-message').addClass('text-danger')
  console.error('onDestroyFailure ran. Error is :', error)
}

const onUpdateSuccess = function () {
  $('#success-display').text('Story successfully updated')
  $('#success-display').removeClass()
  $('#success-display').addClass('text-success')
  $('form').trigger('reset')
  console.log('Story successfully updated')
}

const onUpdateFailure = function (error) {
  $('#error-message').text('Error on updating story')
  $('#error-message').removeClass()
  $('#error-message').addClass('text-danger')
  console.error('onUpdateFailure ran. Error is :', error)
}

module.exports = {
  onError,
  onCreateStorySuccess,
  onIndexSuccess,
  onIndexFailure,
  // onShowSuccess,
  // onShowFailure,
  onDeleteSuccess,
  onDeleteFailure,
  onUpdateSuccess,
  onUpdateFailure
}
