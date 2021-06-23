import React, { useEffect, useState } from 'react'
import tippy, { Instance as TooltipInstance } from 'tippy.js'
import { useRoute } from 'react-router5'
import { nextTick } from '../../helpers/next-tick'
import { getItem, toggleItemFavouriteStatus } from '../../store/items/events'
import { Item } from '../../store/items/types'
import { getItemName } from '../../helpers/item'
import { openModal } from '../../store/modals/events'
import { setItemToDelete } from '../../store/app/events'

import UIButton from '../../components/ui/button'
import ItemField from '../../components/item-page/field'
import IconEdit from '../../components/icons/edit'
import IconDelete from '../../components/icons/delete'

import './_index.scss'
import ItemPageHead from '../../components/item-page/head'

function ItemPage () {
  // @ts-ignore (null as initial value)
  const [data, setData] = useState<Item>(null)
  const { route, router } = useRoute()
  const favouritesButtonId = 'favourites_button'

  const getTooltip = (): TooltipInstance | null => {
    const tooltip = document.getElementById(favouritesButtonId)
    return tooltip ? (tooltip as any)._tippy || null : null
  }

  const updateTooltip = () => {
    nextTick(() => {
      const tooltip = getTooltip()
      setTimeout(() => {
        tooltip?.setContent(data?.isFavourite ? 'Remove from favourites' : 'Add to favourites')
      }, 200)
    })
  }

  const toggleFavourites = () => {
    toggleItemFavouriteStatus({
      id: data._id
    }).then(() => {
      setData({ ...data, isFavourite: !data.isFavourite })
      updateTooltip()
    }).catch(() => {})
  }

  const createTooltip = () => {
    if (getTooltip()) {
      return
    }

    nextTick(() => {
      tippy(`#${favouritesButtonId}`, {
        trigger: 'mouseenter focus',
        content: 'Tooltip',
        placement: 'top',
        animation: 'perspective-subtle',
        theme: 'small'
      })
    })
  }

  const destroyTooltip = () => {
    const tooltip = getTooltip()
    tooltip?.destroy()
  }

  const onEditClick = () => {
    router.navigate('item.edit', { id: data._id })
  }

  const onDeleteClick = () => {
    setItemToDelete(data._id)
    openModal('delete_item')
  }

  const onMounted = () => {
    createTooltip()

    getItem(route.params.id).then(res => {
      setData(res)
    }).catch(() => router.navigate('home'))
  }

  useEffect(() => {
    onMounted()

    return () => {
      destroyTooltip()
    }
  }, [])

  useEffect(() => {
    data ? createTooltip() : destroyTooltip()
    updateTooltip()
  }, [data])

  return (
    <div className="page -profile">
      { data
        ? <div className="intro">
          <section className="actions">
            <div className="buttons flex j-end">
              <UIButton size="small" theme="ghost" onClick={onEditClick}>
                <div className="icon-container -edit">
                  <IconEdit />
                </div>
                <span>Edit</span>
              </UIButton>
              <UIButton size="small" theme="ghost" onClick={onDeleteClick}>
                <div className="icon-container -delete">
                  <IconDelete />
                </div>
                <span>Delete</span>
              </UIButton>
            </div>
          </section>

          <ItemPageHead
            imageSrc={data.image}
            itemName={data.name}
            color={data.color}
            isFavourite={data.isFavourite}
            favouritesButtonId={favouritesButtonId}
            toggleFavourites={toggleFavourites}>
            <div className="name">{getItemName(data)}</div>
            <div className="type">Account credentials</div> { /* TODO: обновить после реализации типов */}
          </ItemPageHead>

          <div className="separator"/>

          <section className="fields">
            {data.name && <ItemField value={data.name}>
              <div>Name</div>
            </ItemField>}

            {data.url && <ItemField type="url" value={data.url}>
              <div>Website</div>
            </ItemField>}

            {data.username && <ItemField value={data.username}>
              <div>Username</div>
            </ItemField>}

            {data.password && <ItemField type="password" value={data.password}>
              <div>Password</div>
            </ItemField>}

            {data.note && <div>
              <div className="separator"/>
              <ItemField value={data.note} textarea={true}>
                <div>Note</div>
              </ItemField>
            </div>}
          </section>
        </div>
        : null }
    </div>
  )
}

export default ItemPage
