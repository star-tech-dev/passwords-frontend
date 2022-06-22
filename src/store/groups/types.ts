import { Item } from '../items/types'

export type GroupID = string

export interface GroupProps {
  _id?: GroupID,
  name?: string,
  items?: Item[]
}

export interface Group {
  _id: GroupID,

  name: string,
  items: Item[]
}

export type State = Group[]

export interface DeleteGroupPayload {
  id: GroupID | null,
  withItems: boolean
}
