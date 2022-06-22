import React from 'react'
import PropTypes from 'prop-types'

import './_index.scss'

const SimpleLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="layout -simple">
      <main>
        <div className="container">
          {children}
        </div>
      </main>
    </div>
  )
}

SimpleLayout.propTypes = {
  children: PropTypes.node
}

export default SimpleLayout
