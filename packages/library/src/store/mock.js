import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { mockAppState } from '../state/mock'

export const getAppMockStore = customAppState => configureStore([thunk])(customAppState || mockAppState)
