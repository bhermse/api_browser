const axios = require('axios')
const API_URL = 'https://api.zoom.us/v2/'

getToken = () => {
  const jwt = require('jsonwebtoken')
  const payload = {iss: process.env.ZOOM_API_KEY, exp: ((new Date()).getTime() + 5000)} 
  return jwt.sign(payload, process.env.ZOOM_API_SECRET)
}

const API_KEY = getToken()

meetingMetricsFor = function(from, to) {
  return axios.get(API_URL + 'metrics/meetings', { 
    params:{access_token: API_KEY, from: from, to: to}}
  ).then((results) => { console.log(results.data); return results })
}

meetingMetricsFor = function(from, to) {
  return axios.get(API_URL + 'metrics/meetings', { 
    params:{access_token: API_KEY, from: from, to: to}}
  ).then((results) => { console.log(results.data); return results })
}

module.exports = {
  api_key: API_KEY,
  meetingMetricsFor: meetingMetricsFor.bind(this)
}
