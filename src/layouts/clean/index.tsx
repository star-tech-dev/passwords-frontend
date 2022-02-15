import React from 'react'
import PropTypes from 'prop-types'

import './_index.scss'

const CleanLayout: React.FC = ({ children }) => {
  return (
    <div className="layout -clean">
      <main>
        {children}
      </main>
    </div>
  )
}

CleanLayout.propTypes = {
  children: PropTypes.node
}

export default CleanLayout
