import React, { useEffect, useState } from 'react'
import { useStore } from 'effector-react'
import { $modals } from '../../../store/modals/store'
import { closeModal } from '../../../store/modals/events'
import CrossIcon from '../../icons/cross'
import PropTypes from 'prop-types'

import './_index.scss'

function ModalWrapper ({ id, children, closable = true, heading }) {
  const modals = useStore($modals)
  const [show, setShow] = useState()

  useEffect(() => {
    const unwatch = $modals.watch(modals => {
      setShow(modals.includes(id))
    })
    return () => unwatch
  }, [modals])

  const close = () => {
    if (closable) {
      closeModal(id)
    }
  }

  const onParentClick = e => {
    if (e.target.classList.contains('Modal') && e.target.classList.contains('Component')) {
      close()
    }
  }

  if (show) {
    return (
      <div className="Modal Component" onClick={onParentClick}>
        <dialog open className="Dialog">
          {closable && <div className="close" onClick={close}>
            <CrossIcon/>
          </div>}
          <div className="Head">{heading}</div>
          <div className="Body">{children}</div>
        </dialog>
      </div>
    )
  } else {
    return null
  }
}

ModalWrapper.propTypes = {
  id: PropTypes.string,
  children: PropTypes.any,
  closable: PropTypes.bool,
  heading: PropTypes.any
}

export default ModalWrapper
