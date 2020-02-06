import { createStore } from 'redux'
import { Store } from './base'
import { getAppDefaultStateFromData } from '../../../library/src/state/default'
import { getAppReducer } from './reducer'
import { setAppCompleteStateThunk } from './thunk/completeState'
import { isRunningOnLocalHostViaDomain, isRunningOnGitHubPages } from '../../../library/src/environment'

export class AppStore extends Store {
  constructor() {
    super()
    this.setAppDefaultState()
    this.setAppStore()
    this.setAppCompleteState()
    this.setHotModuleReloading()
  }

  setAppDefaultState() {
    this.appState = getAppDefaultStateFromData({
      isRunningOnLocalHostViaDomain,
      isRunningOnGitHubPages,
      isRunningOnHeroku: false,
    })
  }

  setAppStore() {
    this.appReducer = getAppReducer()
    this.clientAppStore = this.clientAppStore || createStore(this.appReducer, this.appState, this.enhancer)
  }

  async setAppCompleteState() {
    await this.clientAppStore.dispatch(setAppCompleteStateThunk())
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
