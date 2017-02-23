import C from '../constants'
import { combineReducers } from 'redux'

export const addPlayer = (state = {}, action) =>
  (action.type === C.ADD_PLAYER) ?
    [
      ...state.allPlayerDetails,
      action.payload
    ] :
    state

export const addOpponent = (state = {}, action) =>
  (action.type === C.ADD_OPPONENT) ?
    action.payload :
    state

export const removePlayer = (state = {}, action) =>
  (action.type === C.REMOVE_PLAYER) ?
    state.allPlayerDetails.filter((i) => i.id !== action.payload) :
    state

export const addPlayerNote = function (state = {}, action) {
  if (action.type === C.ADD_PLAYER_NOTE) {
    const index = action.payload.id;
    return [
      ...state[index].notes,
      action.payload.note
    ]
  } else {
    return state
  }
}

export const addGameDate = (state = {}, action) =>
  (action.type === C.ADD_GAME_DATE) ?
    action.payload :
    state


// export default combineReducers({
//   addPlayer,
//   changeOpponent
// })
