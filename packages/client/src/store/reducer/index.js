import { combineReducers } from 'redux'

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
