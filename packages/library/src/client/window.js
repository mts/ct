import { windowObjectExists } from '../environment'

export const isMobile = windowObjectExists ? window.innerWidth <= 460 : false
