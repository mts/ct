import React from 'react'
import { Provider } from 'react-redux'
import { AsyncHomePage } from '../AsyncHomePage'
import { HomePage } from '../HomePage'
import { getAppMockStore } from '../../../../../../library/src/store/mock'
import { mockAppState } from '../../../../../../library/src/state/mock'

export const asyncRender = (
  <Provider store={getAppMockStore(mockAppState)}>
    <AsyncHomePage />
  </Provider>
)

export const defaultRender = (
  <Provider store={getAppMockStore(mockAppState)}>
    <HomePage />
  </Provider>
)
