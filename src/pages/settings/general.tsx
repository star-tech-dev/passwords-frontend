import React from 'react'

function SettingsAppearancePage () {
  return (
    <div className="page -settings-appearance">
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

export default SettingsAppearancePage
