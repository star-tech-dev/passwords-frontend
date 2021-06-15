import React from 'react'

function SettingsAppearancePage () {
  return (
    <div className="page -settings-appearance">
      <div>
        <div>Color theme:</div>
        <select disabled={true}>
          <option value="dark">Dark</option>
        </select>
      </div>
    </div>
  )
}

export default SettingsAppearancePage
