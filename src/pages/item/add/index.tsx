import React, { useEffect, useState } from 'react'
import type { GroupID } from '../../../store/groups/types'
import { useStore } from 'effector-react'
import { useRoute } from 'react-router5'
import { useTranslation } from 'react-i18next'
import { createItem } from '../../../store/items/events'
import { $groups } from '../../../store/groups/store'

import UIButton from '../../../components/ui/button'
import UIInput from '../../../components/ui/input'
import UISelect from '../../../components/ui/select'
import UITextarea from '../../../components/ui/textarea'
import ItemPageHead from '../../../components/item-page/head'
import PasswordField from '../../../components/ui/password-field'
import IconCheck from '../../../components/icons/check'
import IconCross from '../../../components/icons/cross'

import './_index.scss'

function AddItemPage () {
  const { t } = useTranslation()
  const { router } = useRoute()
  const [isLoading, setIsLoading] = useState(false)
  const [image, setImage] = useState('')
  const [color, setColor] = useState('')
  const [randomColor, setRandomColor] = useState('')
  const [group, setGroup] = useState<GroupID | null>(null)
  const groupList = useStore($groups)
  const [name, setName] = useState('')
  const [url, setUrl] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [note, setNote] = useState('')

  const [nameError, setNameError] = useState('')

  const nameField = React.useRef() as React.RefObject<HTMLInputElement>

  const groupOptions = groupList.map(i => ({
    value: i._id,
    text: i.name
  }))

  const create = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    const item = {
      type: 'account', // TODO: изменить после добавления других типов
      group,

      name,
      url,
      username,
      password,
      note,

      image: image || null,
      color: color || randomColor,
      isFavourite: false
    }

    if (!item.name) {
      setNameError(t('errors.required'))
      nameField.current?.focus()
    } else {
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
            <span>{t('global.actions.create')}</span>
          </UIButton>
          <UIButton size="small" theme="ghost" onClick={onCancelClick}>
            <div className="icon-container -cross">
              <IconCross />
            </div>
            <span>{t('global.actions.cancel')}</span>
          </UIButton>
        </div>
      </section>

      <ItemPageHead
        itemUrl={url}
        itemName={name}
        color={color}
        onImageChange={(image: string) => setImage(image)}
        onColorChange={(color: string) => setRandomColor(color)}>
        <div className="name">{t('item.new_item_title')}</div>
        <div className="type">{t('item.icon_info')}</div>
      </ItemPageHead>

      <div className="separator"/>

      <section className="fields">
        <UISelect
          value={group}
          options={groupOptions}
          onChange={(value: any) => setGroup(value)}
        >
          <div>{t('item.fields.group')}</div>
        </UISelect>
        <UIInput
          ref={nameField}
          error={nameError}
          name="name"
          value={name}
          autoFocus={true}
          autoComplete="off"
          onInput={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
          onBlur={e => !e.target.value.length ? setNameError('') : null }>
          <div>{t('item.fields.name')}</div>
        </UIInput>
        <UIInput
          type="url"
          name="url"
          value={url}
          autoComplete="off"
          placeholder="https://example.com"
          onInput={(e: React.ChangeEvent<HTMLInputElement>) => setUrl(e.target.value)}>
          <div>{t('item.fields.website')}</div>
        </UIInput>
        <UIInput
          name="username"
          value={username}
          autoComplete="off"
          onInput={(e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}>
          <div>{t('item.fields.username')}</div>
        </UIInput>
        <PasswordField
          value={password}
          generator={true}
          autoComplete="off"
          onInput={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
          onGenerate={(value: string) => setPassword(value)}>
          <div>{t('item.fields.password')}</div>
        </PasswordField>
        <UITextarea
          name="note"
          value={note}
          autoComplete="off"
          onInput={(e: React.ChangeEvent<HTMLInputElement>) => setNote(e.target.value)}>
          <div>{t('item.fields.note')}</div>
        </UITextarea>
      </section>
    </div>
  )
}

export default AddItemPage
