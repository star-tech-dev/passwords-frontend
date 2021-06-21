import { ItemId } from '../items/types'

export type MountedState = boolean

/* eslint-disable */
export enum ItemsMode {
  default = 'default',
  favourites = 'favourites'
}
export enum GeneratorMode {
  default = 'default',
  field = 'field'
}
/* eslint-enable */

export interface AppState {
  mounted: boolean,
  itemsMode: ItemsMode,
  itemToDelete: ItemId | null,
  generatorMode: GeneratorMode
}
