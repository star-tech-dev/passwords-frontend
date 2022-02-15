import React from 'react'

import UIButton from '../../components/ui/button'

import './_index.scss'

function LandingPage () {
  return (
    <div className="page -landing">
      <h1>landing</h1>

      <section>
        <div>
          <UIButton routeName="home">app</UIButton>
        </div>
      </section>
    </div>
  )
}

export default LandingPage
