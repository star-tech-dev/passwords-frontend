import React, { useEffect, useState } from 'react'
import type { Group } from '../../store/groups/types'
import { useRoute } from 'react-router5'
import { useTranslation } from 'react-i18next'
import { getGroup } from '../../store/groups/events'
import { openModal } from '../../store/modals/events'
import { setItemToDelete } from '../../store/app/events'

import UIButton from '../../components/ui/button'
import ItemField from '../../components/item-page/field'
import IconEdit from '../../components/icons/edit'
import IconDelete from '../../components/icons/delete'

import './_index.scss'
import ItemPageHead from '../../components/item-page/head'

function GroupPage () {
  const { t } = useTranslation()
  // @ts-ignore (null as initial value)
  const [data, setData] = useState<Group>(null)
  const { route, router } = useRoute()

  const onEditClick = () => {
    router.navigate('item.edit', { id: data._id })
  }

  const onDeleteClick = () => {
    setItemToDelete(data._id)
    openModal('delete_item')
  }

  const onMounted = () => {
    getGroup(route.params.id).then(res => {
      setData(res)
    }).catch(() => router.navigate('home'))
  }

  useEffect(() => {
    onMounted()

    return () => {}
  }, [])

  return (
    <div className="page -group">
      { data
        ? <div className="intro">
          <section className="actions">
            <div className="buttons flex j-end">
              <UIButton size="small" theme="ghost" onClick={onEditClick}>
                <div className="icon-container -edit">
                  <IconEdit />
                </div>
                <span>{t('global.actions.edit')}</span>
              </UIButton>
              <UIButton size="small" theme="ghost" onClick={onDeleteClick}>
                <div className="icon-container -delete">
                  <IconDelete />
                </div>
                <span>{t('global.actions.delete')}</span>
              </UIButton>
            </div>
          </section>

          <ItemPageHead
            itemName={data.name}
          >
            <div className="name">{data.name}</div>
            <div className="type">{t('global.folder')}</div>
          </ItemPageHead>

          <div className="separator"/>

          <div>
            items
          </div>
        </div>
        : null }
    </div>
  )
}

export default GroupPage
