import axios from 'axios'
import { openModal } from '../store/modals/events'

export const sendRequest = options => {
  const mergedOptions = {
    method: 'get',
    withCredentials: true,
    ...options
  }
  mergedOptions.url = `${process.env.REACT_APP_API_BASE_URL}${options.url}`

  if (mergedOptions.method === 'get' && Object.prototype.hasOwnProperty.call(mergedOptions, 'data')) {
    mergedOptions.params = options.data
    delete mergedOptions.data
  }

  return axios(mergedOptions)
    .then(res => res.data)
    .catch(err => {
      if (err.response.status === 423) {
        openModal('locker')
      }
      throw err
    })
}

export default { sendRequest }
