import axios, { AxiosRequestConfig } from 'axios'
import { setIsAppLocked } from '../store/locker/events'

export const sendRequest = (options: AxiosRequestConfig) => {
  const mergedOptions = {
    method: 'get',
    withCredentials: true,
    ...options
  } as AxiosRequestConfig

  mergedOptions.url = `${process.env.REACT_APP_API_BASE_URL}${options.url}`

  if (mergedOptions.method === 'get' && Object.prototype.hasOwnProperty.call(mergedOptions, 'data')) {
    mergedOptions.params = options.data
    delete mergedOptions.data
  }

  return axios(mergedOptions)
    .then(res => res.data)
    .catch(err => {
      if (err.response.status === 423) {
        setIsAppLocked(true)
      }
      throw err
    })
}

export default { sendRequest }
