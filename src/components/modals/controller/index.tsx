import React, { useEffect, useState } from 'react'
import { $modals } from '../../../store/modals/store'

import SetSecurityCodeModal from '../set-security-code'
import PasswordGeneratorModal from '../password-generator'
import DeleteItemModal from '../delete-item'

import './_index.scss'

function ModalController () {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const unwatch = $modals.watch(modals => {
      setShow(!!modals.length)
    })
    return () => {
      unwatch()
    }
  }, [])

  return (
    <div className={`component -modal-controller ${show ? '-active' : ''}`}>
      <SetSecurityCodeModal />
      <PasswordGeneratorModal />
      <DeleteItemModal />
    </div>
  )
}

export default ModalController
