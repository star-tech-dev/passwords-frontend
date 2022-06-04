import React, { useEffect, useState } from 'react'
import type { GroupID } from '../../../store/groups/types'
import { useRoute } from 'react-router5'
import { useTranslation } from 'react-i18next'
import { useStore } from 'effector-react'
import { updateItem, getItem } from '../../../store/items/events'
import { Item } from '../../../store/items/types'
import { $items } from '../../../store/items/store'
import { $groups } from '../../../store/groups/store'

import ItemPageHead from '../../../components/item-page/head'
import LoaderRound from '../../../components/loader/round'
import UIButton from '../../../components/ui/button'
import UISelect from '../../../components/ui/select'
import UIInput from '../../../components/ui/input'
import UITextarea from '../../../components/ui/textarea'
import PasswordField from '../../../components/ui/password-field'
import IconCheck from '../../../components/icons/check'
import IconCross from '../../../components/icons/cross'

import './_index.scss'

function EditItemPage () {
  const { t } = useTranslation()
  const { router } = useRoute()
  const items = useStore($items)
  const [isLoading, setIsLoading] = useState(false)
  const [isInitLoading, setIsInitLoading] = useState(false)
  const [data, setData] = useState<Item>({
    _id: '',
    name: ''
  })

  const groupList = useStore($groups)
  const [group, setGroup] = useState<GroupID | null>(null)
  const [color, setColor] = useState('')
  const [image, setImage] = useState('')
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

  const save = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    const item = {
      _id: router.getState().params.id,
      type: 'account', // TODO: изменить после добавления других типов
      group,
      name,
      url,
      username,
      password,
      note,
      color,
      image
    }

    if (!item.name) {
      setNameError(t('errors.required'))
      nameField.current?.focus()
    } else {
      const res = await updateItem(item)
      router.navigate('item', { id: res._id })
    }
    setIsLoading(false)
  }

  const getData = async () => {
    let item: Item | null | undefined

    if (items.length) {
      item = items.find(i => i._id === router.getState().params.id) as Item
      setData(item)
    } else {
      setIsInitLoading(true)
      item = await getItem(router.getState().params.id).catch(() => null)
      item
        ? setData(item)
        : router.navigate('home')
      setIsInitLoading(false)
    }
  }

  const syncFieldsWithData = () => {
    data.group && setGroup(data.group)
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
            <span>{t('global.actions.save')}</span>
          </UIButton>
          <UIButton size="small" theme="ghost" onClick={onCancelClick}>
            <div className="icon-container -cross">
              <IconCross />
            </div>
            <span>{t('global.actions.cancel')}</span>
          </UIButton>
        </div>
      </section>

      {isInitLoading
        ? <LoaderRound />
        : <div>
        <ItemPageHead
          itemUrl={url}
          itemName={name}
          imageSrc={image}
          color={color}
          onImageChange={(image: string) => setImage(image)}
          onColorChange={(color: string) => setColor(color)}>
          {name ? <div className="name">{name}</div> : <div className="name">&nbsp;</div>}
          <div className="type">{t('item.icon_info')}</div>
        </ItemPageHead>

        <div className="separator"/>

        <section className="fields">
          <UISelect
            value={group}
            options={groupOptions}
            disabled={!groupOptions.length}
            emptyText={groupOptions.length ? t('folder.no_folder') : t('folder.no_folders_yet')}
            onChange={(value: any) => setGroup(value)}
          >
            <div>{t('item.fields.group')}</div>
          </UISelect>
          <UIInput
            ref={nameField}
            error={nameError}
            name="name"
            value={name}
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
      </div>}
    </div>
  )
}

export default EditItemPage
