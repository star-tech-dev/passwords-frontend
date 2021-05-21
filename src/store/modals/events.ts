import { ModalsDomain } from './domain'
import { ModalName } from './types'

export const openModal = ModalsDomain.createEvent<ModalName>('open modal')

export const closeModal = ModalsDomain.createEvent<ModalName>('close modal')

export const closeLastModal = ModalsDomain.createEvent('close last modal')

export const closeAllModals = ModalsDomain.createEvent('close all modals')
