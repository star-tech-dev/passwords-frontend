import React from 'react'
import UIButton from '../../components/ui/button'
import IconAngle from '../../components/icons/angle'
import ActionBar from '../../components/settings/action-bar/action-bar'

function SettingsAboutPage () {
  return (
    <div className="page -settings-about">
      <ActionBar left={
        <UIButton routeName="settings" size="small" theme="ghost">
            <span className="icon-container -angle">
              <IconAngle />
            </span>
          <span>Back</span>
        </UIButton>
      } right={null} />

      <section>
        See more at <a href="https://github.com/star-tech-dev/passwords-frontend" target="_blank" rel="noreferrer">GitHub repo</a>.
      </section>
    </div>
  )
}

export default SettingsAboutPage
