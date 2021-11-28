'use strict'
// DON'T FORGET TO EXPORT
// make config
const config = require('../config')
// make store const
const store = require('../store')

const createStory = function (formData) {
  return $.ajax({
    method: 'POST',
    url: `${config.apiUrl}/stories`,
    data: formData,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}
const indexStory = function () {
  return $.ajax({
    url: config.apiUrl + '/stories',
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

/* const showStory = function (id) {
  return $.ajax({
    url: config.apiUrl + '/stories/' + id,
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
} */

const destroyStory = function (id) {
  return $.ajax({
    url: config.apiUrl + '/stories/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const updateStory = function (id, formData) {
  return $.ajax({
    url: config.apiUrl + '/stories/' + id,
    method: 'PATCH',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: formData
  })
}

module.exports = {
  createStory,
  indexStory,
  // showStory,
  destroyStory,
  updateStory
}
