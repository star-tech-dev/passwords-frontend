import React from 'react'
import PropTypes from 'prop-types'

import HeaderComponent from '../components/header'

const DefaultLayout: React.FC = ({ children }) => {
  return (
    <div className="layout -default">
      <div className="container">
        <HeaderComponent />

        <main>
          {children}
        </main>
      </div>
    </div>
  )
}

DefaultLayout.propTypes = {
  children: PropTypes.node
}

export default DefaultLayout
