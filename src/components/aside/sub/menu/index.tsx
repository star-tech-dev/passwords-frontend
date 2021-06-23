import React from 'react'
import { Link } from 'react-router5'

import IconUser from '../../../icons/user'
import IconSettings from '../../../icons/settings'
import IconAbout from '../../../icons/about'

function SubAsideProfileMenu () {
  return (
    <nav className="component -sub-aside-profile-menu flex column">
      <div className="item">
        <div className="icon-container -user">
          <IconUser />
        </div>
        <Link routeName="settings.profile">Profile</Link>
      </div>

      <div className="item">
        <div className="icon-container -settings">
          <IconSettings />
        </div>
        <Link routeName="settings.general">General</Link>
      </div>

      <div className="item">
        <div className="icon-container -about">
          <IconAbout />
        </div>
        <Link routeName="settings.about">About and contacts</Link>
      </div>
    </nav>
  )
}

export default SubAsideProfileMenu
