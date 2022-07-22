import React, { useEffect, useState } from 'react'
import type { GroupProps, Group, GroupColor } from '../../../store/groups/types'
import { useRoute } from 'react-router5'
import { useTranslation } from 'react-i18next'
import { useStore } from 'effector-react'
import { getGroup, updateGroup } from '../../../store/groups/events'
import { $groups } from '../../../store/groups/store'

import ItemPageHead from '../../../components/item-page/head'
import LoaderRound from '../../../components/loader/round'
import UIButton from '../../../components/ui/button'
import UIInput from '../../../components/ui/input'
import ColorPicker from '../../../components/ui/color-picker'
import IconCheck from '../../../components/icons/check'
import IconCross from '../../../components/icons/cross'

import './_index.scss'

function EditGroupPage () {
  const { t } = useTranslation()
  const { router } = useRoute()
  const groups = useStore($groups)
  const [isLoading, setIsLoading] = useState(false)
  const [isInitLoading, setIsInitLoading] = useState(false)
  const [data, setData] = useState<GroupProps>({
    _id: '',
    name: '',
    color: null
  })

  const [name, setName] = useState('')
  const [color, setColor] = useState<GroupColor | null>(null)
  const [nameError, setNameError] = useState('')
  const nameField = React.useRef() as React.RefObject<HTMLInputElement>

  const save = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    const group = {
      _id: router.getState().params.id,
      name,
      color
    }

    if (!group.name) {
      setNameError(t('errors.required'))
      nameField.current?.focus()
    } else {
      const res = await updateGroup(group)
      router.navigate('group', { id: res._id })
    }
    setIsLoading(false)
  }

  const getData = async () => {
    let group: GroupProps | null | undefined

    if (groups.length) {
      group = groups.find(i => i._id === router.getState().params.id) as Group
      setData(group)
    } else {
      setIsInitLoading(true)
      group = await getGroup(router.getState().params.id).catch(() => null)
      group
        ? setData(group)
        : router.navigate('home')
      setIsInitLoading(false)
    }
  }

  const syncFieldsWithData = () => {
    data.name && setName(data.name)
    data.color && setColor(data.color)
  }

  const onCancelClick = () => {
    router.navigate('group', { id: data._id })
  }

  useEffect(() => {
    getData()
  }, [])

  useEffect(() => {
    syncFieldsWithData()
  }, [data])

  return (
    <div className="page -edit-group">
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
            itemName={data.name}
            mode="folder"
          >
            <div className="name">{data.name}</div>
            <div className="type">{t('item.fields.group')}</div>
        </ItemPageHead>

        <div className="separator"/>

        <section className="fields">
          <UIInput
            ref={nameField}
            error={nameError}
            name="name"
            value={name}
            autoComplete="off"
            autoFocus={true}
            onInput={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
            onBlur={e => !e.target.value.length ? setNameError('') : null }>
            <div>{t('item.fields.name')}</div>
          </UIInput>

          <div>
            <ColorPicker value={color} onChange={(e: GroupColor) => setColor(e)}>Color</ColorPicker>
          </div>
        </section>
      </div>}
    </div>
  )
}

export default EditGroupPage
