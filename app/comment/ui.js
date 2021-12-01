'use strict'
// TODO: make button appear and work...

const onCreateCommentSuccess = function (responseData) {
  // extract the comment object from our response's data
  const comment = responseData.comment
  console.log(responseData)

  // create the html to display a single comment
  const commentHtml = `
    <div class= 'single-comment'data-id=${comment._id} style="display: none">
      <p>Author: ${comment.owner}</p>
      <p>Encounter: ${comment.message}</p>
       <button class='comment-destroy-dynamic' data-id=${comment._id}>Delete Comment</button>
      <br>
    </div>
  `

  // for the div with the id comment-display,
  // set its html to be our comment's html
  $('.comment-display').html(commentHtml)

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
  console.log('onIndexSuccess ran. responseData is :', responseData.comments)

  let commentsHtml = ''
  const comments = responseData.comments
  comments.forEach((comment) => {
    commentsHtml += `
    <div>
      <h4>Title: ${comment.title}</h4>
      <p>Author: ${comment.owner}</p>
      <p>Encounter: ${comment.message}</p>
      <button class='comment-destroy-dynamic' data-id=${comment._id}>Delete Post</button>
    </div>
  `

    // for the div with the id comment-display,
    // set its html to be our comment's html
    $('.comments-display').html(commentsHtml)

    $('form').trigger('reset')
  })
  $('.comment-display').html(commentsHtml)
}

const onIndexFailure = function (error) {
  $('#error-message').text('Error on getting comments')
  $('#error-message').removeClass()
  $('#error-message').addClass('text-danger')
  console.error('onIndexFailure ran. Error is :', error)
}

/* const onShowSuccess = function (responseData) {
  $('#success-display').text('One Comment successfully received')
  $('#success-display').removeClass()
  $('#success-display').addClass('text-success')
  console.log('onShowSuccess ran. responseData is :', responseData)
  $('form').trigger('reset')

  const comment = responseData.comment
  $('#comments-display').html(`
     <div>
      <h4>Title: ${comment.title}</h4>
      <p>Author: ${comment.owner}</p>
      <p>Encounter: ${comment.message}</p>
    </div>
  `)
}

const onShowFailure = function (error) {
  $('#error-message').text('Error on getting comment')
  $('#error-message').removeClass()
  $('#error-message').addClass('text-danger')
  console.error('onShowFailure ran. Error is :', error)
} */

const onDeleteSuccess = function () {
  $('#success-display').text('Comment successfully deleted')
  $('#success-display').removeClass()
  $('#success-display').addClass('text-success')
  $('form').trigger('reset')
  console.log('Comment successfully deleted')
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
  console.log('Comment successfully updated')
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
  // onShowSuccess,
  // onShowFailure,
  onDeleteSuccess,
  onDeleteFailure,
  onUpdateSuccess,
  onUpdateFailure
}
