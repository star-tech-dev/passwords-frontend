import React, { useEffect, useState } from 'react'
import { closeModal } from '../../store/modals/events'
import { nextTick } from '../../helpers/next-tick'

import ModalWrapper from './wrapper'
import UIInput from '../ui/input'
import UIButton from '../ui/button'

function SetSecurityCodeModal () {
  const id = 'password_generator'
  const [code, setCode] = useState('')

  let codeField = null as HTMLInputElement | null
  const setCodeFieldRef = (element: HTMLInputElement) => {
    codeField = element
  }

  const generate = () => {
    console.log('generate')
    setCode('random_code_here')
  }

  useEffect(() => {
    nextTick(() => {
      codeField?.focus()
    })
  }, [code])

  return (
    <ModalWrapper id={id} onOpen={generate}>
      <div>Password generator</div>
      <div>
        <UIInput ref={setCodeFieldRef} value={code} />
      </div>
      <div className="buttons">
        <UIButton onClick={generate}>Regenerate</UIButton>
        <UIButton theme="ghost" onClick={() => closeModal(id)}>Close</UIButton>
      </div>
    </ModalWrapper>
  )
}

export default SetSecurityCodeModal
