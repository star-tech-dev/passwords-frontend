import React, { useEffect, useState } from 'react'
import { useRoute } from 'react-router5'
import { createItem } from '../../../store/items/events'

import UIButton from '../../../components/ui/button'
import UIInput from '../../../components/ui/input'
import UITextarea from '../../../components/ui/textarea'
import ItemPageHead from '../../../components/item-page/head'
import PasswordField from '../../../components/ui/password-field'
import IconCheck from '../../../components/icons/check'
import IconCross from '../../../components/icons/cross'

import './_index.scss'

function AddItemPage () {
  const { router } = useRoute()
  const [isLoading, setIsLoading] = useState(false)
  const [image, setImage] = useState('')
  const [color, setColor] = useState('')
  const [randomColor, setRandomColor] = useState('')
  const [name, setName] = useState('')
  const [url, setUrl] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [note, setNote] = useState('')

  const [nameError, setNameError] = useState('')

  const nameField = React.useRef() as React.RefObject<HTMLInputElement>

  const create = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    const item = {
      group: null,
      name,
      url,
      username,
      password,
      note,
      image: image || null,
      color: color || randomColor
    }

    if (!item.name) {
      setNameError('This field is required')
      nameField.current?.focus()
    } else {
      // console.log('item', item)
      const res = await createItem(item)
      router.navigate('item', { id: res._id })
    }
    setIsLoading(false)
  }

  const onCancelClick = () => {
    router.navigate('home')
  }

  useEffect(() => {
    if (!url) {
      setColor('')
      setImage('')
    }
  }, [url])

  return (
    <div className="page -add-item">
      <section className="page-actions">
        <div className="buttons flex j-end">
          <UIButton size="small" theme="ghost" loading={isLoading} onClick={create}>
            <span className="icon-container -check">
              <IconCheck />
            </span>
            <span>Create</span>
          </UIButton>
          <UIButton size="small" theme="ghost" onClick={onCancelClick}>
            <div className="icon-container -cross">
              <IconCross />
            </div>
            <span>Cancel</span>
          </UIButton>
        </div>
      </section>

      <ItemPageHead
        itemUrl={url}
        itemName={name}
        color={color}
        onImageChange={(image: string) => setImage(image)}
        onColorChange={(color: string) => setRandomColor(color)}>
        <div className="name">New item creation</div>
        <div className="type">Icon is based on item name or website</div>
      </ItemPageHead>

      <div className="separator"/>

      <section className="fields">
        <UIInput
          ref={nameField}
          error={nameError}
          name="name"
          value={name}
          autoFocus={true}
          autoComplete="off"
          onInput={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
          onBlur={e => !e.target.value.length ? setNameError('') : null }>
          <div>Name</div>
        </UIInput>
        <UIInput
          type="url"
          name="url"
          value={url}
          autoComplete="off"
          placeholder="https://example.com"
          onInput={(e: React.ChangeEvent<HTMLInputElement>) => setUrl(e.target.value)}>
          <div>Website</div>
        </UIInput>
        <UIInput
          name="username"
          value={username}
          autoComplete="off"
          onInput={(e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}>
          <div>Username</div>
        </UIInput>
        <PasswordField
          value={password}
          generator={true}
          autoComplete="off"
          onInput={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
          onGenerate={(value: string) => setPassword(value)}>
          <div>Password</div>
        </PasswordField>
        <UITextarea
          name="note"
          value={note}
          autoComplete="off"
          onInput={(e: React.ChangeEvent<HTMLInputElement>) => setNote(e.target.value)}>
          <div>Note</div>
        </UITextarea>
      </section>
    </div>
  )
}

export default AddItemPage
