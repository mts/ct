import { apiWebSocketSetCounterAction } from '../action/actionCreators'
import { initiateWebSocket } from '../../api/webSocket/clientWebSocket'

export const setAppCompleteStateThunk = () => async dispatch => {
  initiateWebSocket(dispatch, apiWebSocketSetCounterAction)
}
