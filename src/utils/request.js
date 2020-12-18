import axios from 'axios'
// import { MessageBox } from 'element-ui'
// import { getToken } from '@/utils/auth'
import store from '@/redux/store'
import { endpointUrl } from '@/utils/config'

function getToken() {
  const statte = store.getState()
  return statte.userData.token
}
const token = getToken()

// create an axios instance
const service = axios.create({
  // baseURL: endpointUrl, // url = base url + request url
  withCredentials: true, // send cookies when cross-domain requests
  timeout: 15000, // request timeout
  validateStatus(status) {
    return status < 500 // 状态码在大于或等于500时才会 reject
  }
})
// request interceptor
service.interceptors.request.use(
  config => {
    // do something before request is sent
    if (token) {
      config.headers['X-Session-Token'] = token
    }
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  response => {

    const status = response.status
    if (status !== 200) {
      if (status === 401) {
        return response
        // MessageBox.confirm('You have been logged out, you can cancel to stay on this page, or log in again', 'Confirm logout', {
        //   confirmButtonText: 'Re-Login',
        //   cancelButtonText: 'Cancel',
        //   type: 'warning'
        // }).then(() => {
        // })
      }
      return Promise.reject(new Error(response.message || 'Error'))
    } else {
      return response
    }
  },
  error => {
    console.log('err: ' + error) // for debug
    if (error.response != null) {
      if (error.response.status === 500) {
      // Display ExTrace ID
        const traceId = error.response.headers['x-extrace']
      } else if (error.response.status === 403) {
        // MessageBox.alert(`没有足够操作权限`, '权限问题')
        return Promise.resolve({})
      }
    }
    return Promise.resolve(error)
  }
)

// 支持自定义参数
const request = ({ ...ags }, baseURL = endpointUrl) => {
  const data = Object.assign(ags, { baseURL: baseURL })
  return service(data)
}

export default request
