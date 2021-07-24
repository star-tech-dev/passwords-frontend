import React, { useCallback, useEffect, useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import { useStore } from 'effector-react'
import { $modals } from '../../../store/modals/store'
import { closeModal } from '../../../store/modals/events'
import { ModalName } from '../../../store/modals/types'
// import CrossIcon from '../../icons/cross'

import './_index.scss'

interface ModalWrapperProps {
  id: ModalName,
  children?: any,
  closable?: boolean,
  heading?: any,
  size?: 'default' | 'auto',
  onOpen?: Function,
  onClose?: Function,
  onConfirm?: Function
}

function ModalWrapper (props: ModalWrapperProps) {
  const modals = useStore($modals)
  const [show, setShow] = useState(false)
  const classList = `component -modal -${props.id} -size-${props.size || 'default'}`

  const isClosable = () => {
    return props.closable || props.closable === undefined
  }

  const onKeyUp: any = useCallback((e: React.KeyboardEvent) => {
    console.log('e', e.keyCode)
    if (e.keyCode === 27) { // esc
      closeModal(props.id)
    }
    if (e.keyCode === 13) { // enter
      props.onConfirm && props.onConfirm()
    }
  }, [])

  const enableKeyUpWatcher = () => {
    document.addEventListener('keyup', onKeyUp)
  }

  const disableKeyUpWatcher = () => {
    document.removeEventListener('keyup', onKeyUp)
  }

  useEffect(() => {
    const unwatch = $modals.watch(modals => {
      setShow(modals.includes(props.id))
    })
    return () => {
      unwatch()
    }
  }, [modals])

  useEffect(() => {
    if (show) {
      enableKeyUpWatcher()
      props.onOpen && props.onOpen()
    }
    if (!show) {
      disableKeyUpWatcher()
      props.onClose && props.onClose()
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

  return (
    <CSSTransition
      in={show}
      timeout={0}
      classNames="modal"
      unmountOnExit>
      <div className={classList} onClick={onParentClick}>
        <dialog open className="dialog">
          {/* {isClosable() && <div className="close" onClick={close}> */}
          {/*  <CrossIcon/> */}
          {/* </div>} */}
          {props.heading && <div className="head">
            <div className="h2 flex center">{props.heading}</div>
          </div>}
          <div className="body">{props.children}</div>
        </dialog>
      </div>
    </CSSTransition>
  )
}

export default ModalWrapper
