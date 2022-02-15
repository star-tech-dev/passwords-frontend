import React from 'react'

import IconLogo from '../../components/icons/logo-tech'
import UIButton from '../../components/ui/button'

import LaptopImage from '../../assets/svg/laptop.svg'

import './_index.scss'

function LandingPage () {
  return (
    <div className="page -landing">
      <header>
        <div className="container -wide flex a-center j-between">
          <div>
            <IconLogo />
          </div>
          <div className="flex a-center">
            <nav>
              <a href="#">Features</a>
              <a href="#">Security</a>
              <a href="#">GitHub</a>
              <a href="#">More projects</a>
            </nav>
            <div>
              <UIButton>Sign in</UIButton>
            </div>
          </div>
        </div>
      </header>

      <section className="first flex column center">
        <div className="container -wide flex center">
          <div className="info">
            <h1>
              Personal secured <br/>
              password manager
            </h1>
            <div className="text">
              Use our secured personal password manager
              with 256-bit AES encryption. It&apos;s completely free. You can set advanced passphrase, lock the app without sign out and generate passwords there.
            </div>
            <div className="buttons">
              <UIButton routeName="home">Get started</UIButton>
              <UIButton theme="ghost">See demo</UIButton>
            </div>
          </div>
          <div>
            <img src={LaptopImage} alt="" />
          </div>
        </div>
      </section>

      <section>
        <div className="container -wide">
          <div>section</div>
        </div>
      </section>
    </div>
  )
}

export default LandingPage
