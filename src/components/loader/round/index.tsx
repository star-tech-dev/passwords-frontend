import React from 'react'
import loaderSvg from '../../../assets/svg/loader.svg'

import './_index.scss'

function RoundLoader () {
  return (
    <div className="component -loader-round">
      <img src={loaderSvg} className="svg" alt=""/>
    </div>
  )
}

export default RoundLoader
