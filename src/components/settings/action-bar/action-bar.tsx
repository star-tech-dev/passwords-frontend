import React from 'react'

import './_index.scss'

interface SettingsActionBarProps extends React.ComponentProps<any> {
  left?: any,
  right?: any
}

function SettingsActionBar (props: SettingsActionBarProps) {
  return (
    <div className="component -settings-action-bar flex j-between">
      <div className="buttons flex a-center">
        {props.left}
      </div>

      {props.right && <div className="buttons flex a-center">
        {props.right}
      </div>}
    </div>
  )
}

export default SettingsActionBar
