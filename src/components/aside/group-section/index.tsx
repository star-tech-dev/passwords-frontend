import React, { useEffect, useState } from 'react'
import { Group, GroupID } from '../../../store/groups/types'
import { useRouter } from 'react-router5'
import { useTranslation } from 'react-i18next'
import { getGroups, createGroup as sendCreationRequest } from '../../../store/groups/events'

import UIInput from '../../../components/ui/input'
import IconFolder from '../../icons/folder'
import NavItem from '../nav-item'
import { State as RouterState, Unsubscribe as UnsubscribeRouter } from 'router5/dist/types/base'

import './_index.scss'

function GroupSection () {
  const { t } = useTranslation()
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)
  const [showCreationItem, setShowCreationItem] = useState(false)
  const [list, setList] = useState<any[]>([])
  const [newItemName, setNewItemName] = useState('')
  const [openedGroup, setOpenedGroup] = useState<GroupID | null>(null)

  const getList = async () => {
    const groups = await getGroups()
    setList(groups)
    setIsLoading(false)
  }

  const groupList = () => {
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    return list.map(item => <NavItem className={`-new ${item._id === openedGroup ? '-active' : ''}`} key={item._id} onClick={() => onItemClick(item)}>
      <div className="icon-container -folder">
        <IconFolder/>
      </div>
      <span>{item.name}</span>
    </NavItem>)
  }

  const reset = () => {
    setShowCreationItem(false)
    setNewItemName('')
  }

  const createGroup = async (e?: any) => {
    e && e.preventDefault()
    const item = await sendCreationRequest({ name: newItemName })
    // setList([item, ...list])
    reset()
    router.navigate('group', { id: item._id })
  }

  const checkRoute = (route: RouterState) => {
    // Если мы на странице item с тем же id, то делаем компонент активным
    setOpenedGroup(route.name === 'group' ? route.params.id : null)
  }

  const onAddClick = (e: any) => {
    e.preventDefault()
    setShowCreationItem(true)
  }

  const onItemClick = (data: Group) => {
    router.navigate('group', { id: data._id })
  }

  const onNewItemBlur = () => {
    newItemName.length
      ? createGroup()
      : reset()
  }

  useEffect(() => {
    getList()

    checkRoute(router.getState())
    const unsubscribe = router.subscribe(({ route }) => {
      checkRoute(route)
    }) as UnsubscribeRouter
    return () => {
      unsubscribe()
    }
  }, [])

  return (
    <section className={!isLoading && list.length ? '' : '-empty'}>
      <header className="flex a-center j-between">
        <div className="title">{t('aside.main.folders.title')}</div>
        <a className="on-hover" href="#" onClick={onAddClick}>{t('global.actions.add')}</a>
      </header>

      <div className="group-list">
        {showCreationItem
          ? <NavItem className="-new">
              <div className="icon-container -key">
                <IconFolder/>
              </div>
              <form onSubmit={createGroup}>
                <UIInput
                  theme="clean"
                  value={newItemName}
                  placeholder="Folder name"
                  autoFocus={true}
                  onInput={(e: any) => setNewItemName(e.target.value)}
                  onChange={(e: any) => setNewItemName(e.target.value)}
                  onBlur={onNewItemBlur}
                ></UIInput>
              </form>
            </NavItem>
          : null}
        {groupList()}
      </div>
    </section>
  )
}

export default GroupSection
