const api = require('./api')
// import the ui success and failure handler functions
const ui = require('./ui')

// import the getFormFields function, to get data out of our form
const getFormFields = require('../../lib/get-form-fields')

 const onCreateComment = (event) => {
  // prevent the default action of the form refreshing the page
  // when it is submitted.
  event.preventDefault()
  const form = event.target
  // Get the data out of our `form`
  const formData = getFormFields(form)

  // extract the id from our form's data

  api
    .createComment(formData)

    .then(ui.onCreateCommentSuccess)

    .catch(ui.onError)
}


const onIndexComment = function (event) {
  event.preventDefault()

  api.indexComment().then(ui.onIndexSuccess).catch(ui.onIndexFailure)
}

const onDeleteComment = function (event) {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)
  const id = formData.comment.id

  api.destroyComment(id).then(ui.onDeleteSuccess).catch(ui.onDeleteFailure)
}

const onUpdateComment = function (event) {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)
  const id = formData.comment.id

  api.update(id, formData).then(ui.onUpdateSuccess).catch(ui.onUpdateFailure)
}

// Handle clicking the dynamic destroy buttons
const onDynamicDestroyComment = function (event) {
  // event.target is the delete button that was clicked on
  const deleteButton = event.target

  // Extract the id from the delete button that was clicked on's data-id attribute
  const id = $(deleteButton).data('id')

  // make API call for deleting one book with the data we grabbed from the form
  api
    .destroyComment(id)

  // if the API call is successful then invoke the  function
    .then(ui.onDeleteSuccess)

  // if the API call fails then run our onError function
    .catch(ui.onError)
}

const onDynamicCommentStory = function (event) {
  $('.comment-single-story').show()
}

const onDynamicCommentStoryPartTwo = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  const id = $(event.target).data('id')

  api
    .createComment(id, formData)

    .then(ui.onCreateCommentSuccess)
    .catch(ui.onError)
}
module.exports = {
  // onCreateComment,
  onIndexComment,
  onDeleteComment,
  onUpdateComment,
  onDynamicDestroyComment,
  onDynamicCommentStory,
  onDynamicCommentStoryPartTwo
}
