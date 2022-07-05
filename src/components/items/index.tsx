import React, { useEffect, useState } from 'react'
import type { Item as ItemInterface } from '../../store/items/types'
import { useStore } from 'effector-react'
import { useTranslation } from 'react-i18next'
import { Link, useRouter } from 'react-router5'
import { $items } from '../../store/items/store'
import { getItems } from '../../store/items/events'
import { ItemsMode } from '../../store/app/types'

import Item from '../item'
import LoaderRound from '../loader/round'
import UIButton from '../ui/button'

import './_index.scss'

interface ItemsProps {
  searchQuery?: string,
  mode?: ItemsMode
}

function Items (props: ItemsProps) {
  const [isLoading, setIsLoading] = useState(false)
  const storedItems = useStore($items)
  const items = useStore($items)
  const router = useRouter()
  const { t } = useTranslation()

  const list = () => {
    let arr = items

    if (props.mode === ItemsMode.favourites) {
      arr = arr.filter(item => item.isFavourite)
    }

    if (props.mode === ItemsMode.group) {
      const route = router.getState()
      let id = ''
      if (route.name === 'item' || route.name === 'item.edit') {
        const itemID = route.params.id
        const storedItem = storedItems.find(i => i._id === itemID) as ItemInterface
        id = storedItem?.group as string
      } else {
        id = route.params.id
      }
      arr = arr.filter(item => item.group === id)
    }

    if (props.searchQuery) {
      arr = arr.filter(item => {
        const str = `${item.name} ${item.url} ${item.username} ${item.note}`.toLowerCase()
        return str.includes(props.searchQuery?.toLowerCase() as string)
      })
    }

    return arr.length
      ? arr.map(item => {
        return <Item data={item} key={item._id} />
      })
      : null
  }

  const showNav = () => props.mode === ItemsMode.group

  const onMounted = async () => {
    setIsLoading(true)
    await getItems().catch(() => [])
    setIsLoading(false)
  }

  useEffect(() => {
    onMounted()
  }, [])

  return (
    <div className={`component -item-list ${(!items.length || !list()) && !isLoading ? '-empty' : ''} ${isLoading ? '-loading' : ''}`}>
      {isLoading
        ? <div className="loader-parent">
          <LoaderRound />
        </div>
        : items.length
          ? <div>
            {showNav()
              ? <nav className="flex column a-start">
                  <Link routeName="home" className="nav-item">← {t('aside.sub.all_items')}</Link>
                </nav>
              : null}
            {list()
              ? list()
              : <div className="sub-empty flex column center">
                <div>{t('aside.sub.no_folder_items')}</div>
              </div>}
          </div>
          : <div className="flex column center">
            <div>{t('aside.sub.no_items_yet')}</div>
            <div className="button-parent">
              <UIButton routeName="add" theme="ghost">{t('aside.sub.create_one')}</UIButton>
            </div>
        </div>}
    </div>
  )
}

export default Items
