import { GroupsDomain } from './domain'
import { sendRequest } from '../../api'
import { Group, GroupID, GroupProps } from './types'

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
