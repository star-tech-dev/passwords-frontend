import React, { forwardRef, useEffect, useState } from 'react'

import IconAngle, { AngleDirection } from '../../icons/angle'

import './_index.scss'

interface DropdownProps extends React.ComponentProps<any> {
  left?: any,
  right?: any,
  onOpen?: Function,
  onClose?: Function
}

const UIDropdown = forwardRef((props: DropdownProps, ref: any) => {
  const [isOpened, setIsOpened] = useState(false)
  const [angleDirection, setAngleDirection] = useState<AngleDirection>(AngleDirection.right)

  const toggle = () => {
    setIsOpened(!isOpened)
  }

  const close = () => {
    setIsOpened(false)
  }

  useEffect(() => {
    isOpened && props.onOpen && props.onOpen()
    !isOpened && props.onClose && props.onClose()
    setAngleDirection(isOpened ? AngleDirection.bottom : AngleDirection.right)
  }, [isOpened])

  useEffect(() => {
    if (ref) {
      ref.current = { close }
    }
  }, [ref])

  return (
    <div className={`component -dropdown ${isOpened ? '-opened' : ''}`}>
      {props.label && <div className="label">{props.label}</div>}
      <div className="head" onClick={toggle}>
        <div className="flex a-center j-between">
          <div>{props.left}</div>
          <div className="right">{props.right}</div>
        </div>
        <div className="icon-container -angle">
          <IconAngle direction={angleDirection} />
        </div>
      </div>
      {isOpened && <div className="content">
        <div>{props.children}</div>
      </div>}
    </div>
  )
})

UIDropdown.displayName = 'UIDropdown'

export default UIDropdown
