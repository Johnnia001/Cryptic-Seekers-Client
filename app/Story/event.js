const api = require('./api')
// import the ui success and failure handler functions
const ui = require('./ui')

// import the getFormFields function, to get data out of our form
const getFormFields = require('../../lib/get-form-fields')

const onCreateStory = (event) => {
  // prevent the default action of the form refreshing the page
  // when it is submitted.
  event.preventDefault()
  const form = event.target
  // Get the data out of our `form`
  const formData = getFormFields(form)
  console.log(formData)

  // extract the id from our form's data

  api
    .createStory(formData)

    .then(ui.onCreateStorySuccess)

    .catch(ui.onError)
}

const onIndexStory = function (event) {
  event.preventDefault()
  console.log('onIndexStory ran!')

  api.indexStory()
    .then(ui.onIndexSuccess)
    .catch(ui.onIndexFailure)
}

/* const onShowStory = function (event) {
  event.preventDefault()
  console.log('onShowStory ran!')

  const form = event.target
  const formData = getFormFields(form)
  const id = formData.story.id

  api.show(id)
    .then(ui.onShowSuccess)
    .catch(ui.onShowFailure)
} */

const onDeleteStory = function (event) {
  event.preventDefault()
  console.log('onDeleteStory ran!')

  const form = event.target
  const formData = getFormFields(form)
  const id = formData.story.id

  api.destroy(id)
    .then(ui.onDeleteSuccess)
    .catch(ui.onDeleteFailure)
}

const onUpdateStory = function (event) {
  event.preventDefault()
  console.log('onUpdateStory ran!')

  const form = event.target
  const formData = getFormFields(form)
  const id = formData.story.id

  api.update(id, formData)
    .then(ui.onUpdateSuccess)
    .catch(ui.onUpdateFailure)
}

module.exports = {
  onCreateStory,
  onIndexStory,
  // onShowStory,
  onDeleteStory,
  onUpdateStory
}
