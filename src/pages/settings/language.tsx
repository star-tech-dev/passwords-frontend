import React from 'react'

function SettingsLanguagePage () {
  return (
    <div className="page -settings-language">
      <div>
        <div>Language:</div>
        <select disabled={true}>
          <option value="en">English</option>
        </select>
      </div>
    </div>
  )
}

export default SettingsLanguagePage
