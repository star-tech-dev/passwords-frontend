import React, { useEffect, useState } from 'react'
import tippy from 'tippy.js'
import { useStore } from 'effector-react'
import { closeModal } from '../../../store/modals/events'
import { $app as appStore } from '../../../store/app/store'
import { nextTick } from '../../../helpers/next-tick'
import { onCloseGenerator, onSaveGenerated } from '../../../store/app/events'
import { generatePassword } from '../../../helpers/password-generator'
import { GeneratorMode } from '../../../store/app/types'

import ModalWrapper from '../wrapper'
import UIInput from '../../ui/input'
import UIButton from '../../ui/button'
import UICheckbox from '../../ui/checkbox'
import UISafetyRange from '../../ui/safety-range'
// import IconUpdate from '../../icons/update'
import IconCopy from '../../icons/copy'

import './_index.scss'

function PasswordGeneratorModal () {
  const id = 'password_generator'
  const $app = useStore(appStore)
  const [length, setLength] = useState(18)
  const [code, setCode] = useState('')
  const [smallLetters, setSmallLetters] = useState(true)
  const [largeLetters, setLargeLetters] = useState(true)
  const [numbers, setNumbers] = useState(true)
  const [symbols, setSymbols] = useState(false)

  const codeField = React.createRef()

  const focusAndSelect = () => {
    nextTick(() => {
      (codeField.current as any)?.focus();
      (codeField.current as any)?.select()
    })
  }

  const generate = () => {
    const password = generatePassword({
      length,
      smallLetters,
      largeLetters,
      numbers,
      symbols
    })

    setCode(password)
    focusAndSelect()
  }

  const save = () => {
    onSaveGenerated(code)
    closeModal(id)
  }

  const copy = () => {
    navigator.clipboard.writeText(code)

    const tooltipElement = document.querySelector('.component.-modal.-password_generator .icon-container.-copy')
    if (tooltipElement) {
      setTimeout(() => {
        (tooltipElement as any)._tippy?.show()
      }, 100)
      setTimeout(() => {
        (tooltipElement as any)._tippy?.hide()
      }, 1600)
    }
  }

  const createTooltip = () => {
    nextTick(() => {
      tippy('.component.-modal.-password_generator .icon-container.-copy', {
        trigger: 'click',
        content: 'Copied'
      })
    })
  }

  const onOpen = () => {
    generate()
    createTooltip()
  }

  const onClose = () => {
    onCloseGenerator()
  }

  useEffect(() => {
    focusAndSelect()
  }, [code])

  useEffect(() => {
    generate()
  }, [length, smallLetters, largeLetters, numbers, symbols])

  return (
    <ModalWrapper id={id} onOpen={onOpen} onClose={onClose}>
      <section className="field">
        <div className="icons">
          <div className="icon-container -copy" onClick={copy}>
            <IconCopy />
          </div>
        </div>
        <UIInput ref={codeField} value={code} readOnly={true} onClick={() => focusAndSelect()}>
          <div>Generated password</div>
        </UIInput>
      </section>

      <section className="options">
        <div className="length-bar">
          <div className="flex a-center j-between">
            <div>weak</div>
            <div>length {length}</div>
            <div>strong</div>
          </div>
          <UISafetyRange min={4} max={30} value={length} step={1} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLength(+e.target.value)} />
        </div>

        <div className="checkboxes flex a-center">
          <UICheckbox checked={smallLetters} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSmallLetters(e.target.checked)}>
            <div>abc</div>
          </UICheckbox>
          <UICheckbox checked={largeLetters} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLargeLetters(e.target.checked)}>
            <div>ABC</div>
          </UICheckbox>
          <UICheckbox checked={numbers} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNumbers(e.target.checked)}>
            <div>123</div>
          </UICheckbox>
          <UICheckbox checked={symbols} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSymbols(e.target.checked)}>
            <div>@&%#</div>
          </UICheckbox>
        </div>
      </section>

      <section className="modal-buttons buttons">
        {$app.generatorMode === GeneratorMode.field && <UIButton onClick={save}>Keep</UIButton>}
        <UIButton onClick={generate} theme="ghost">Regenerate</UIButton>
        <UIButton theme="ghost" onClick={() => closeModal(id)}>Close</UIButton>
      </section>
    </ModalWrapper>
  )
}

export default PasswordGeneratorModal
