'use strict'
// DON'T FORGET TO EXPORT
// make config
const config = require('../config')
// make store const
const store = require('../store')

const createComment = function (formData) {
  return $.ajax({
    method: 'POST',
    url: `${config.apiUrl}/comments`,
    data: formData,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}
const indexComment = function () {
  return $.ajax({
    url: config.apiUrl + '/comments',
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const destroyComment = function (id) {
  return $.ajax({
    url: config.apiUrl + '/comments/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const updateComment = function (id, formData) {
  return $.ajax({
    url: config.apiUrl + '/comments/' + id,
    method: 'PATCH',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: formData
  })
}

module.exports = {
  createComment,
  indexComment,
  destroyComment,
  updateComment
}
