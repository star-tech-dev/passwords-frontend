import React from 'react'
import { Link } from 'react-router5'

function SubAsideProfileMenu () {
  return (
    <div className="component -sub-aside-profile-menu flex column">
      <div>
        <Link routeName="settings.profile">Profile</Link>
      </div>
      <div>
        <Link routeName="settings.appearance">Appearance</Link>
      </div>
      <div>
        <Link routeName="settings.language">Language</Link>
      </div>
      <div>
        <Link routeName="settings.about">About</Link>
      </div>
    </div>
  )
}

export default SubAsideProfileMenu
