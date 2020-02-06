import { combineReducers } from 'redux'
import { API_WEBSOCKET_SET_COUNTER } from '../action/actionTypes'

export const getAppReducer = () =>
  combineReducers({
    context: (state = {}, action) => {
      switch (action.type) {
        default:
          return state
      }
    },
    api: (state = {}, action) => {
      switch (action.type) {
        case API_WEBSOCKET_SET_COUNTER:
          return {
            ...state,
            webSocket: {
              ...state.webSocket,
              counter: action.payload,
            },
          }
        default:
          return state
      }
    },
    ui: (state = {}, action) => {
      switch (action.type) {
        default:
          return state
      }
    },
  })
