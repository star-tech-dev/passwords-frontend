import React, { useEffect, useState } from 'react'
import { $modals } from '../../../store/modals/store'

import SetSecurityCodeModal from '../set-security-code'
import LockerModal from '../locker'

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
  })

  return (
    <div className={`Modal Controller ${show ? '-active' : ''}`}>
      <SetSecurityCodeModal />
      <LockerModal />
    </div>
  )
}

export default ModalController
