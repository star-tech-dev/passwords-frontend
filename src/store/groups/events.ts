import { GroupsDomain } from './domain'
import { sendRequest } from '../../api'
import { DeleteGroupPayload, Group, GroupID, GroupProps } from './types'
import { ItemsDomain } from '../items/domain'

export const getGroups = GroupsDomain.createEffect<void, Group[]>().use(() => {
  return sendRequest({
    url: '/groups'
  }).catch(() => [])
})

export const getGroup = GroupsDomain.createEffect<GroupID, Group>().use((id) => {
  return sendRequest({
    url: '/group',
    data: { id }
  }).catch(() => [])
})

export const createGroup = GroupsDomain.createEffect<GroupProps, Group>().use(payload => {
  return sendRequest({
    method: 'POST',
    url: '/groups',
    data: payload
  }).catch(() => null)
})

export const updateGroup = GroupsDomain.createEffect<GroupProps, Group>().use(payload => {
  return sendRequest({
    method: 'put',
    data: payload,
    url: '/groups'
  })
})

export const deleteGroup = ItemsDomain.createEffect<DeleteGroupPayload, void>().use(payload => {
  return sendRequest({
    method: 'delete',
    data: payload,
    url: '/groups'
  })
})
