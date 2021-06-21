import React, { useState } from 'react'

import './_index.scss'

interface SafetyRangeProps extends React.ComponentProps<any> {}

function SafetyRange (props: SafetyRangeProps) {
  const [holdLoop, setHoldLoop] = useState<any>(null)
  const [isMouseDown, setIsMouseDown] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  let domRef = null as any
  const setDomRef = (element: any) => {
    domRef = element
  }

  const forceNumber = (n: any) => {
    n = Number(n)
    if (isNaN(n) || typeof n === 'undefined') {
      n = 0
    }
    return n
  }

  const makeHoldLoop = (oldVal: any) => {
    return setInterval(function () {
      if (!isMouseDown || isDragging) {
        // The user isn't holding the cursor anymore, or the cursor
        // is being dragged. Clean up and cancel.
        if (holdLoop) {
          clearInterval(holdLoop)
          setHoldLoop(null)
        }
        return false
      }

      const input = domRef.current
      let newVal = props.value

      if (
        oldVal > newVal &&
        (newVal - props.step) >= props.min
      ) {
        newVal -= props.step
      } else if (
        oldVal < newVal &&
        (newVal + props.step) <= props.max
      ) {
        newVal += props.step
      }

      if (oldVal === newVal) {
        return false
      }

      // Directly setting input.value will cause the new value
      // to not be recognized, because of React.
      // https://stackoverflow.com/a/46012210/173630
      // @ts-ignore
      const nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set
      // @ts-ignore
      nativeInputValueSetter.call(input, newVal)

      // Trigger an onChange event.
      const e = new Event('change', { bubbles: true })

      return input.dispatchEvent(e)
    }, 100)
  }

  const onMouseDown = () => {
    setIsMouseDown(true)

    if (props.hold) {
      if (holdLoop) {
        clearInterval(holdLoop)
        setHoldLoop(null)
      }

      const oldVal = props.value

      setTimeout(() => {
        if (holdLoop) {
          clearInterval(holdLoop)
          setHoldLoop(null)
        }
        setHoldLoop(makeHoldLoop(oldVal))
        // Add some initial delay on the click-hold functionality.
      }, 250)
    }
  }

  const onMouseUp = () => {
    setIsMouseDown(false)
    setIsDragging(false)

    if (holdLoop) {
      clearInterval(holdLoop)
      setHoldLoop(null)
    }
  }

  const onMouseMove = () => {
    if (isMouseDown) {
      setIsDragging(true)
    }
  }

  const onInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const step = props.step
    const newVal = forceNumber(e.target.value)
    const oldVal = props.value

    if (
      // Disable the oninput filter with the user is dragging
      // the slider's knob.
      !(isMouseDown && isDragging) &&
      oldVal
    ) {
      e.target.value = (newVal > oldVal)
        ? oldVal + step
        : oldVal - step
    }
  }

  return (
    <div className="component -safety-range">
      <input
      type="range"
      ref={setDomRef}
      className={props.className}
      min={props.min}
      max={props.max}
      step={props.step}
      value={props.value}
      name={props.name}
      id={props.id}
      style={props.style}
      disabled={props.disabled}
      onChange={props.onChange}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onMouseMove={onMouseMove}
      onInput={onInput} />
    </div>
  )
}

export default SafetyRange
