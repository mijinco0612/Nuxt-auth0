import Vue from 'vue'

export default function ({$axios}) {
  $axios.onRequest(config => {
    console.log('Making request to ' + config.url)
    config.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('idToken');
  })

  $axios.onError(error => {
    Vue.toasted.error(error)
  })
}
