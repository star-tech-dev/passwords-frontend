import { ItemsMode, MountedState, GeneratorMode } from './types'
import { AppDomain } from './domain'

export const setMounted = AppDomain.event<MountedState>()

export const toggleMasonryItem = AppDomain.event<void>()

export const itemsFiltered = AppDomain.event<void>()

export const setItemsMode = AppDomain.event<ItemsMode>()

export const setItemToDelete = AppDomain.createEvent<string>()

export const onOpenGenerator = AppDomain.createEvent<GeneratorMode>()

export const onCloseGenerator = AppDomain.createEvent()

export const onSaveGenerated = AppDomain.createEvent<string>()

export const onLanguageChanged = AppDomain.createEvent<string>()
