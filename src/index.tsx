import React from 'react'
import ReactDOM from 'react-dom'
import { RouterProvider } from 'react-router5'
import { configureRouter as createRouter } from './router'
import { setMounted } from './store/app/events'
// import reportWebVitals from './report-web-vitals'
import i18next from './i18n'

import App from './app'

import './assets/scss/index.scss'

i18next.init()

export const router = createRouter()

ReactDOM.render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>,
  document.getElementById('root')
)

router.start(() => {
  setMounted(true)
})

// If you want to start measuring performance in your app, pass a function.
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(console.log)
