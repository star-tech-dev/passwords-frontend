import React, { useState } from 'react'
import { useStore } from 'effector-react'
import { useRouter } from 'react-router5'
import { closeModal } from '../../../store/modals/events'
import { deleteItem } from '../../../store/items/events'
import { $app as appStore } from '../../../store/app/store'
import { $items as itemsStore } from '../../../store/items/store'

import ModalWrapper from '../wrapper'
import UIButton from '../../ui/button'
import IconDelete from '../../icons/delete'

import './_index.scss'

function DeleteItemModal () {
  const [isLoading, setIsLoading] = useState(false)
  const [name, setName] = useState('')
  const id = 'delete_item'
  const $app = useStore(appStore)
  const $items = useStore(itemsStore)
  const router = useRouter()

  const getItemName = () => {
    const item = $items.find(i => i._id === $app.itemToDelete)
    setName(item?.name || $app.itemToDelete || '')
  }

  const onOpen = () => {
    getItemName()
  }

  const onDelete = async () => {
    setIsLoading(true)

    await deleteItem({
      id: $app.itemToDelete
    }).then(() => {
      closeModal(id)
      router.navigate('home')
    }).catch(err => {
      console.warn('err', err)
    })

    setIsLoading(false)
  }

  return (
    <ModalWrapper id={id} onOpen={onOpen} onConfirm={onDelete}>
      <div className="modal-title">Delete the record?</div>
      <div className="modal-subtitle">
        <div className="item-name">{name}</div>
      </div>
      <div className="modal-buttons buttons">
        <UIButton size="small" theme="danger" loading={isLoading} onClick={onDelete}>
          <div className="icon-container -delete">
            <IconDelete />
          </div>
          <span>Delete</span>
        </UIButton>
        <UIButton size="small" theme="ghost" onClick={() => closeModal(id)}>Cancel</UIButton>
      </div>
    </ModalWrapper>
  )
}

export default DeleteItemModal
