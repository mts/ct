import { createStore } from 'redux'
import { Store } from './base'
import { getAppDefaultStateFromWindow } from '../../../library/src/state/default'
import { getAppReducer } from './reducer'

export class AppStore extends Store {
  constructor() {
    super()

    this.setAppDefaultState()
    this.setAppStore()
    this.setHotModuleReloading()
  }

  setAppDefaultState() {
    this.appState = getAppDefaultStateFromWindow()
  }

  setAppStore() {
    this.appReducer = getAppReducer()
    this.clientAppStore = this.clientAppStore || createStore(this.appReducer, this.appState, this.enhancer)
  }

  /* istanbul ignore next */
  setHotModuleReloading() {
    if (module.hot) {
      module.hot.accept(['./reducer'], () => {
        const nextAppReducer = this.appReducer.default
        this.clientAppStore.replaceReducer(nextAppReducer)
      })
    }
  }
}

export const { clientAppStore } = new AppStore()
