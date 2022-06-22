import React, { useState } from 'react'
import { useStore } from 'effector-react'
import { useRouter } from 'react-router5'
import { useTranslation } from 'react-i18next'
import { closeModal } from '../../../store/modals/events'
import { deleteGroup } from '../../../store/groups/events'
import { $app as appStore } from '../../../store/app/store'
import { $groups as groupsStore } from '../../../store/groups/store'

import ModalWrapper from '../wrapper'
import UIButton from '../../ui/button'
import IconDelete from '../../icons/delete'
import UICheckbox from '../../ui/checkbox'

import './_index.scss'

function DeleteGroupModal () {
  const { t } = useTranslation()
  const [isLoading, setIsLoading] = useState(false)
  const [name, setName] = useState('')
  const [withItems, setWithItems] = useState(false)
  const id = 'delete_group'
  const $app = useStore(appStore)
  const $groups = useStore(groupsStore)
  const router = useRouter()

  const getItemName = () => {
    const group = $groups.find(i => i._id === $app.itemToDelete)
    setName(group?.name || $app.itemToDelete || '')
  }

  const onOpen = () => {
    getItemName()
  }

  const onDelete = async () => {
    setIsLoading(true)

    await deleteGroup({
      id: appStore.getState().itemToDelete,
      withItems
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
      <div className="modal-title">{t('delete_group_modal.title')}</div>
      <div className="modal-subtitle">
        <div className="item-name">{name}</div>
      </div>
      <div className="modal-content">
        <UICheckbox
          value={withItems}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setWithItems(e.target.checked)}
        >{t('delete_group_modal.delete_all')}</UICheckbox>
      </div>
      <div className="modal-buttons buttons">
        <UIButton size="small" theme="danger" loading={isLoading} onClick={onDelete}>
          <div className="icon-container -delete">
            <IconDelete />
          </div>
          <span>{t('global.actions.delete')}</span>
        </UIButton>
        <UIButton size="small" theme="ghost" onClick={() => closeModal(id)}>{t('global.actions.cancel')}</UIButton>
      </div>
    </ModalWrapper>
  )
}

export default DeleteGroupModal
