import React from 'react'

import UIButton from '../../components/ui/button'
import IconAngle from '../../components/icons/angle'
import ActionBar from '../../components/settings/action-bar/action-bar'

function SettingsGeneralPage () {
  return (
    <div className="page -settings-general">
      <ActionBar left={
        <UIButton routeName="settings" size="small" theme="ghost">
            <span className="icon-container -angle">
              <IconAngle />
            </span>
          <span>Back</span>
        </UIButton>
      } right={null} />

      <section>
        <div>Color theme:</div>
        <select defaultValue="dark" disabled={true}>
          <option value="dark">Dark</option>
        </select>
      </section>

      <section>
        <div>Language:</div>
        <select defaultValue="en" disabled={true}>
          <option value="en">English</option>
        </select>
      </section>
    </div>
  )
}

export default SettingsGeneralPage
