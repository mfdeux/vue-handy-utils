import Vue from 'vue'
import moment from 'moment'

Vue.filter('capitalize', function (value) {
  if (!value) return ''
  value = value.toString()
  return value.charAt(0).toUpperCase() + value.slice(1)
})

function toTitleCase (str) {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  })
}

Vue.filter('capitalize', val => val.toUpperCase())
Vue.filter('titlecase', val => toTitleCase(val))

Vue.filter('date', function (value) {
  if (value) {
    return moment(String(value)).format('MM/DD/YYYY')
  }
})

Vue.filter('amount', function (value) {
  if (value) {
    return value.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD'
    })
  }
})

Vue.filter('noSnake', function (value) {
  if (value) {
    return value.replace('-', ' ').replace('_', ' ')
  }
})

Vue.filter('amount', function (value) {
  if (value) {
    return value.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD'
    })
  }
})
