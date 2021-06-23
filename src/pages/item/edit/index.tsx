import React, { useEffect, useState } from 'react'
import { useRoute } from 'react-router5'
import { updateItem, getItem } from '../../../store/items/events'
import { Item } from '../../../store/items/types'
import ItemPageHead from '../../../components/item-page/head'

import UIButton from '../../../components/ui/button'
import UIInput from '../../../components/ui/input'
import UITextarea from '../../../components/ui/textarea'
import PasswordField from '../../../components/ui/password-field'
import IconCheck from '../../../components/icons/check'
import IconCross from '../../../components/icons/cross'

import './_index.scss'

function EditItemPage () {
  const { router } = useRoute()
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState<Item>({
    _id: '',
    name: ''
  })

  const [color, setColor] = useState('')
  const [image, setImage] = useState('')
  const [name, setName] = useState('')
  const [url, setUrl] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [note, setNote] = useState('')

  const [nameError, setNameError] = useState('')

  const nameField = React.useRef() as React.RefObject<HTMLInputElement>

  const save = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    const item = {
      group: null,
      _id: router.getState().params.id,
      color,
      image,
      name,
      url,
      username,
      password,
      note
    }

    if (!item.name) {
      setNameError('This field is required')
      nameField.current?.focus()
    } else {
      const res = await updateItem(item)
      router.navigate('item', { id: res._id })
    }
    setIsLoading(false)
  }

  const getData = async () => {
    const item = await getItem(router.getState().params.id).catch(() => null)
    item ? setData(item) : router.navigate('home')
  }

  const syncFieldsWithData = () => {
    data.color && setColor(data.color)
    data.image && setImage(data.image)
    data.name && setName(data.name)
    data.url && setUrl(data.url)
    data.username && setUsername(data.username)
    data.password && setPassword(data.password)
    data.note && setNote(data.note)
  }

  const onCancelClick = () => {
    router.navigate('item', { id: data._id })
  }

  useEffect(() => {
    getData()
  }, [])

  useEffect(() => {
    syncFieldsWithData()
  }, [data])

  useEffect(() => {
    if (!url) {
      setImage('')
      setColor('')
    }
  }, [url])

  return (
    <div className="page -edit-item">
      <section className="actions">
        <div className="buttons flex j-end">
          <UIButton size="small" theme="ghost" loading={isLoading} onClick={save}>
            <div className="icon-container -check">
              <IconCheck />
            </div>
            <span>Save</span>
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
        imageSrc={image}
        color={color}
        onImageChange={(image: string) => setImage(image)}
        onColorChange={(color: string) => setColor(color)}>
        <div className="name">{name}</div>
        <div className="type">Icon is based on item name or website</div>
      </ItemPageHead>

      <div className="separator"/>

      <section className="fields">
        <UIInput
          ref={nameField}
          error={nameError}
          name="name"
          value={name}
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
          autoComplete="off"
          onInput={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
          onGenerate={(value: string) => setPassword(value)}/>
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

export default EditItemPage
