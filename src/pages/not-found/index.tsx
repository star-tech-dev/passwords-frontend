import React from 'react'

import './_index.scss'

function NotFoundPage () {
  return (
    <div className="page -not-found">
      <h1>404</h1>

      <section>
        <div>not found</div>
        <div><br/></div>
        <div>
          <a href="/">go to home page</a>
        </div>
      </section>
    </div>
  )
}

export default NotFoundPage
