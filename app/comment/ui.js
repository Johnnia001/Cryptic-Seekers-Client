'use strict'
// TODO: make button appear and work...

const onCreateCommentSuccess = function (formData) {
  // extract the comment object from our response's data
  const story = formData.story

  // create the html to display a single comment
  const commentHtml = `
    <div class= 'single-comment'data-id=${story._id} style="display: none">
      <p> ${story.comment}</p>
      
       <button class='comment-destroy-dynamic' data-id=${story._id}>Delete Comment</button>
      <br>
    </div>
  `

  // for the div with the id comment-display,
  // set its html to be our comment's html
  $(`#comment-display${story._id}`).html(commentHtml)

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
  $('#success-display').text('All Comments successfully received')
  $('#success-display').removeClass()

  let commentsHtml = ''
  const story = responseData.story
  story.forEach((comment) => {
    const story = responseData.story
    commentsHtml += `
    <div>
     <div class= 'single-comment'data-id=${story._id} style="display: none">
      <p> ${story.comment}</p>
      
       <button class='comment-destroy-dynamic' data-id=${story._id}>Delete Comment</button>
      <br>
    </div>
  `

    // for the div with the id comment-display,
    // set its html to be our comment's html
    $(`#comment-display${story._id}`).html(commentsHtml)

    $('form').trigger('reset')
  })
  // $(`comment-display${story._id}`).html(commentsHtml)
}

const onIndexFailure = function (error) {
  $('#error-message').text('Error on getting comments')
  $('#error-message').removeClass()
  $('#error-message').addClass('text-danger')
  console.error('onIndexFailure ran. Error is :', error)
}

const onDeleteSuccess = function () {
  $('#success-display').text('Comment successfully deleted')
  $('#success-display').removeClass()
  $('#success-display').addClass('text-success')
  $('form').trigger('reset')
}

const onDeleteFailure = function (error) {
  $('#error-message').text('Error on deleting comment')
  $('#error-message').removeClass()
  $('#error-message').addClass('text-danger')
  console.error('onDestroyFailure ran. Error is :', error)
}

const onUpdateSuccess = function () {
  $('#success-display').text('Comment successfully updated')
  $('#success-display').removeClass()
  $('#success-display').addClass('text-success')
  $('form').trigger('reset')
}

const onUpdateFailure = function (error) {
  $('#error-message').text('Error on updating comment')
  $('#error-message').removeClass()
  $('#error-message').addClass('text-danger')
  console.error('onUpdateFailure ran. Error is :', error)
}

module.exports = {
  onError,
  onCreateCommentSuccess,
  onIndexSuccess,
  onIndexFailure,
  onDeleteSuccess,
  onDeleteFailure,
  onUpdateSuccess,
  onUpdateFailure
}
