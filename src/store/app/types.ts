/* eslint-disable */
export type MountedState = boolean

export enum ItemsMode {
  default = 'default',
  favourites = 'favourites'
}

export interface AppState {
  mounted: boolean,
  itemsMode: ItemsMode
}
