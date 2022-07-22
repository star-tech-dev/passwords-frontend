import { Item } from '../items/types'

export type GroupID = string
export enum GroupColor {
  Red = 'red',
  Blue = 'blue',
  Orange = 'orange',
  Violet = 'violet',
  Green = 'green'
}

export interface GroupProps {
  _id?: GroupID,
  name?: string,
  color?: GroupColor | null,
  items?: Item[]
}

export interface Group {
  _id: GroupID,
  name: string,
  color: GroupColor | null,
  items: Item[]
}

export type State = Group[]

export interface DeleteGroupPayload {
  id: GroupID | null,
  withItems: boolean
}
