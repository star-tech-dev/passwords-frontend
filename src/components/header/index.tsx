import React from 'react'
import { Link } from 'react-router5'
import { lock } from '../../store/locker/events'

import UIButton from '../ui/button'
import IconLock from '../icons/lock'
import IconAdd from '../icons/add'

import './_index.scss'

function Header () {
  const lockApp = (e: React.FormEvent) => {
    e.preventDefault()
    lock()
  }

  return (
    <header className="component -header flex a-center j-between">
      <nav>
        <Link routeName="home">Home</Link>
        <Link routeName="profile">Account</Link>
        {/* <Link routeName="about">About</Link> */}
        <a href="https://github.com/star-tech-dev/passwords-frontend" target="_blank" rel="noreferrer">Github</a>
      </nav>
      <div className="right flex a-center">
        <UIButton size="small" theme="ghost" onClick={lockApp}>
          <IconLock />
          <span>Lock app</span>
        </UIButton>
        <Link routeName="add">
          <UIButton size="small">
            <IconAdd />
            <span>New item</span>
          </UIButton>
        </Link>
      </div>
    </header>
  )
}

export default Header
