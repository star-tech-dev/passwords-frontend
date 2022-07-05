import React from 'react'
import { useTranslation } from 'react-i18next'

import LanguageSelect from '../../components/settings/language-select'
import IconLogo from '../../components/icons/logo-tech'
import UIButton from '../../components/ui/button'

import LaptopImage from '../../assets/img/laptop.svg'
import InterfaceGif from '../../assets/img/passwords.gif'

import './_index.scss'

function LandingPage () {
  const year = new Date().getFullYear()
  const { t } = useTranslation()

  return (
    <div className="page -landing">
      <header>
        <div className="container -wide flex a-center j-between">
          <div className="flex a-center">
            <div className="logo">
              <IconLogo />
            </div>
            <LanguageSelect/>
          </div>
          <div className="flex a-center">
            <nav>
              {/* <a href="#">Features</a> */}
              {/* <a href="#">Security</a> */}
              <a href="https://github.com/star-tech-dev/passwords-frontend" target="_blank" rel="noreferrer">GitHub</a>
              <a href="https://star-tech.dev" target="_blank" rel="noreferrer">{t('landing_page.nav.more_projects')}</a>
            </nav>
            <div>
              <UIButton routeName="home">{t('landing_page.get_started')}</UIButton>
            </div>
          </div>
        </div>
      </header>

      <section className="first flex column center">
        <div className="container -wide flex center">
          <div className="info">
            <h1 dangerouslySetInnerHTML={{ __html: t('landing_page.first_section.heading') }}></h1>
            <div className="text" dangerouslySetInnerHTML={{ __html: t('landing_page.first_section.description') }}></div>
            <div className="buttons">
              <UIButton routeName="home">{t('landing_page.get_started')}</UIButton>
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
          <span>Passwords app, 2021-{year} &copy; {t('landing_page.copyright')} </span>
          <a href="https://star-tech.dev" target="_blank" rel="noreferrer">STAR-tech</a>
        </div>
      </section>
    </div>
  )
}

export default LandingPage
