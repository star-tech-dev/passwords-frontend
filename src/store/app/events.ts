import { MountedState } from './types'
import { AppDomain } from './domain'

export const setMounted = AppDomain.event<MountedState>()
