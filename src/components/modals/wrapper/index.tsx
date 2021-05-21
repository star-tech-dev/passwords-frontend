import React, { useEffect, useState } from 'react'
import { useStore } from 'effector-react'
import { $modals } from '../../../store/modals/store'
import { closeModal } from '../../../store/modals/events'
import { ModalName } from '../../../store/modals/types'
import CrossIcon from '../../icons/cross'
import PropTypes from 'prop-types'

import './_index.scss'

interface ModalWrapperProps {
  id: ModalName,
  children?: any,
  closable?: boolean,
  heading?: any
}

function ModalWrapper ({ id, children, closable = true, heading }: ModalWrapperProps) {
  const modals = useStore($modals)
  const [show, setShow] = useState(false)

  useEffect(() => {
    const unwatch = $modals.watch(modals => {
      setShow(modals.includes(id))
    })
    return () => {
      unwatch()
    }
  }, [modals])

  const close = () => {
    if (closable) {
      closeModal(id)
    }
  }

  const onParentClick = (e: React.MouseEvent) => {
    const target = e.target as Element
    if (target.classList.contains('Modal') && target.classList.contains('Component')) {
      close()
    }
  }

  if (show) {
    return (
      <div className="modal component" onClick={onParentClick}>
        <dialog open className="dialog">
          {closable && <div className="close" onClick={close}>
            <CrossIcon/>
          </div>}
          <div className="head">{heading}</div>
          <div className="body">{children}</div>
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
