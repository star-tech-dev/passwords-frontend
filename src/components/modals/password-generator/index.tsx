import React, { useEffect, useState } from 'react'
import { closeModal } from '../../../store/modals/events'
import { nextTick } from '../../../helpers/next-tick'

import ModalWrapper from '../wrapper'
import UIInput from '../../ui/input'
import UIButton from '../../ui/button'
// import IconUpdate from '../../icons/update'

import './_index.scss'
import { onSaveGenerated } from '../../../store/app/events'

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

  const save = () => {
    onSaveGenerated(code)
    closeModal(id)
  }

  useEffect(() => {
    nextTick(() => {
      codeField?.focus()
    })
  }, [code])

  return (
    <ModalWrapper id={id} heading="Password generator" onOpen={generate}>
      <section className="field">
        <UIInput ref={setCodeFieldRef} value={code} />
      </section>

      <section className="options">
        options
      </section>

      <section className="buttons">
        <UIButton onClick={save}>Save</UIButton>
        <UIButton onClick={generate} theme="ghost">Regenerate</UIButton>
        <UIButton theme="ghost" onClick={() => closeModal(id)}>Close</UIButton>
      </section>
    </ModalWrapper>
  )
}

export default SetSecurityCodeModal
