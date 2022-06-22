import React, { useEffect, useState } from 'react'
import type { Group } from '../../store/groups/types'
import { useRoute } from 'react-router5'
import { useTranslation } from 'react-i18next'
import { getGroup } from '../../store/groups/events'
import { openModal } from '../../store/modals/events'
import { setItemToDelete } from '../../store/app/events'

import UIButton from '../../components/ui/button'
import IconEdit from '../../components/icons/edit'
import IconDelete from '../../components/icons/delete'

import './_index.scss'
import ItemPageHead from '../../components/item-page/head'

function GroupPage () {
  const { t } = useTranslation()
  // @ts-ignore (null as initial value)
  const [data, setData] = useState<Group>(null)
  const { route, router } = useRoute()

  const itemsAmount = () => data.items.length

  const onEditClick = () => {
    router.navigate('group.edit', { id: data._id })
  }

  const onDeleteClick = () => {
    setItemToDelete(data._id)
    openModal('delete_group')
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
            mode="folder"
          >
            <div className="name">{data.name}</div>
            <div className="type">{t('item.fields.group')}</div>
          </ItemPageHead>

          <div className="separator"/>

          <div>
            {itemsAmount()} {t('group_page.items_amount', { count: itemsAmount() })}
          </div>
        </div>
        : null }
    </div>
  )
}

export default GroupPage
