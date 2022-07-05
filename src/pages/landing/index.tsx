import React from 'react'

import IconLogo from '../../components/icons/logo-tech'
import UIButton from '../../components/ui/button'

import LaptopImage from '../../assets/img/laptop.svg'
import InterfaceGif from '../../assets/img/passwords.gif'

import './_index.scss'

function LandingPage () {
  const year = new Date().getFullYear()

  return (
    <div className="page -landing">
      <header>
        <div className="container -wide flex a-center j-between">
          <div className="logo">
            <IconLogo />
          </div>
          <div className="flex a-center">
            <nav>
              {/* <a href="#">Features</a> */}
              {/* <a href="#">Security</a> */}
              <a href="https://github.com/star-tech-dev/passwords-frontend" target="_blank" rel="noreferrer">GitHub</a>
              <a href="https://star-tech.dev" target="_blank" rel="noreferrer">More projects</a>
            </nav>
            <div>
              <UIButton routeName="home">Get started</UIButton>
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
              {/* <UIButton theme="ghost">See demo</UIButton> */}
            </div>
          </div>
          <div className="laptop">
            <div className="screen">
              <img src={InterfaceGif} alt="" />
            </div>
            <img src={LaptopImage} alt="" />
          </div>
        </div>
      </section>

      <section hidden>
        <div className="container -wide">
          <h2>What&apos;s about security?</h2>
          <div>section</div>
        </div>
      </section>

      <section hidden>
        <div className="container -wide flex column center">
          <h2>Wanna see a demo?</h2>
          <div>
            <UIButton>Sign in as guest</UIButton>
          </div>
        </div>
      </section>

      <section className="copyright">
        <div className="container -wide">
          <span>Passwords app, 2021-{year} &copy; Designed with coffee by </span>
          <a href="https://star-tech.dev" target="_blank" rel="noreferrer">STAR-tech</a>
        </div>
      </section>
    </div>
  )
}

export default LandingPage
