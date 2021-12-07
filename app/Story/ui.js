/* eslint-disable no-tabs */
'use strict'
const onCreateStorySuccess = function (responseData) {
  // extract the story object from our response's data
  const story = responseData.story

  // create the html to display stories
  const storyHtml = `
    <div>
      <h4>Title: ${story.title}</h4>
      <p>Author: ${story.owner}</p>
      <p>Encounter: ${story.message}</p>
      
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

  let storiesHtml = ''
  const stories = responseData.stories
  stories.forEach((story) => {
    let commentHtml = ''
    story.comment.forEach((comment) => {
      commentHtml += `
      <div>
      <p>Comment: ${comment.content}</p>
      </div>
      `
    })

    storiesHtml += `
    <div>
      <h4> ${story.title}</h4>
      <p>User: ${story.owner}</p>
      <p>Encounter: ${story.message}</p>
      <button class='story-destroy-dynamic' data-id=${story._id}>Delete Post</button>
        <button class='story-update-dynamic'>Edit Post</button>
        <form class='update-single-story' data-id=${story._id}>
        <fieldset class='update-single-story'  style= "display: none">
					<legend>edit</legend>
					<input
						type="text"
						name="story[title]"
						placeholder="Enter Story Text"
						required
					/>
					<input
						type="text"
						name="story[message]"
						placeholder="Enter Edited Story"
						required
					/>
					<button class="btn btn-primary">Update Story</button>
				</fieldset>
			</form>
      <!--comment button-->
      <button class='story-comment-dynamic'>comment</button>
      <!--comment form -->
       <form class="comment-form" data-id=${story._id}>
        <fieldset class='comment-single-story'  style= "display: none">
					
					<input
						type="text"
						name="story[comment]"
						placeholder="Reply"
						required
					/>
					<button class="btn btn-primary">Reply</button>
				</fieldset>
			</form>
      <section id= "comment-area">
      ${commentHtml}
      </section>
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
  setTimeout(function () {
    $('#error-message').removeClass()
  }, 5000)
  console.error('onIndexFailure ran. Error is :', error)
}

const onDeleteSuccess = function () {
  $('#success-display').text('Story successfully deleted')
  $('#success-display').removeClass()
  $('#success-display').addClass('text-success')
  $('form').trigger('reset')
}

const onDeleteFailure = function (error) {
  $('#error-message').text('Error on deleting story')
  $('#error-message').removeClass()
  $('#error-message').addClass('text-danger')
  setTimeout(function () {
    $('#error-message').removeClass()
  }, 5000)
  console.error('onDestroyFailure ran. Error is :', error)
}

const onUpdateSuccess = function () {
  $('#success-display').text('Story successfully updated')
  $('#success-display').removeClass()
  $('#success-display').addClass('text-success')
  $('form').trigger('reset')
}

const onUpdateFailure = function (error) {
  $('#error-message').text('Error on updating story')
  $('#error-message').removeClass()
  $('#error-message').addClass('text-danger')
  setTimeout(function () {
    $('#error-message').removeClass()
  }, 5000)
  console.error('onUpdateFailure ran. Error is :', error)
}

module.exports = {
  onError,
  onCreateStorySuccess,
  onIndexSuccess,
  onIndexFailure,
  onDeleteSuccess,
  onDeleteFailure,
  onUpdateSuccess,
  onUpdateFailure
}
