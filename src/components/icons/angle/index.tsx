import React from 'react'

import './_index.scss'

/* eslint-disable no-unused-vars */
export enum AngleDirection {
  top = 'top',
  right = 'right',
  bottom = 'bottom',
  left = 'left'
}
/* eslint-enable no-unused-vars */

interface IconAngleProps extends React.ComponentProps<any> {
  direction?: AngleDirection
}

function IconAngle (props: IconAngleProps) {
  return (
    <svg className={`icon -angle -${props.direction}`} width="9px" height="14px" viewBox="0 0 10 16" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g transform="translate(-966.000000, -52.000000)" fill="currentColor" fillRule="nonzero">
          <g transform="translate(952.000000, 40.000000)">
            <g transform="translate(18.992790, 20.000000) rotate(-180.000000) translate(-18.992790, -20.000000) translate(14.000000, 12.000000)">
              <path d="M9.57696702,6.91122623 L2.41514961,0.414520855 C1.86245513,-0.138173618 0.967215329,-0.138173618 0.414520855,0.414520855 C-0.138173618,0.967215329 -0.138173618,1.86243493 0.414520855,2.41514961 L6.57070098,8.0000303 L0.414520855,13.5848706 C-0.138173618,14.1375449 -0.138173618,15.0327847 0.414520855,15.5854791 C0.967215329,16.1381736 1.86245513,16.1381736 2.41514961,15.5854791 L9.57696702,9.08877377 C9.87559577,8.79014503 10.0072849,8.3910778 9.98268032,8.0000101 C10.0066385,7.6089222 9.87559577,7.20987517 9.57696702,6.91122623 Z" />
            </g>
          </g>
        </g>
      </g>
    </svg>
  )
}

export default IconAngle
