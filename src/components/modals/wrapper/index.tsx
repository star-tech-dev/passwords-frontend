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
  heading?: any,
  size?: 'default' | 'auto',
  onOpen?: Function,
  onClose?: Function
}

function ModalWrapper (props: ModalWrapperProps) {
  const [_mounted, _setMounted] = useState(false)
  const modals = useStore($modals)
  const [show, setShow] = useState(false)
  const classList = `component -modal -${props.id} -size-${props.size || 'default'}`

  const isClosable = () => {
    return props.closable || props.closable === undefined
  }

  useEffect(() => {
    _setMounted(true)
  }, [])

  useEffect(() => {
    const unwatch = $modals.watch(modals => {
      setShow(modals.includes(props.id))
    })
    return () => {
      unwatch()
    }
  }, [modals])

  useEffect(() => {
    if (_mounted) {
      if (show && props.onOpen) {
        props.onOpen()
      }
      if (!show && props.onClose) {
        props.onClose()
      }
    }
  }, [show])

  const close = () => {
    if (isClosable()) {
      closeModal(props.id)
    }
  }

  const onParentClick = (e: React.MouseEvent) => {
    const target = e.target as Element
    if (target.classList.contains('component') && target.classList.contains('-modal')) {
      close()
    }
  }

  if (show) {
    return (
      <div className={classList} onClick={onParentClick}>
        <dialog open className="dialog">
          {isClosable() && <div className="close" onClick={close}>
            <CrossIcon/>
          </div>}
          <div className="head">
            <div className="h2 flex center">{props.heading}</div>
          </div>
          <div className="body">{props.children}</div>
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
