import React from 'react'
import RoundLoader from '../round'

import './_index.scss'

function Loader () {
  return (
    <div className="component -page-loader flex center">
      <RoundLoader />
    </div>
  )
}

export default Loader
