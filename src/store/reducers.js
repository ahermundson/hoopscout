import C from '../constants'
import { combineReducers } from 'redux'


export const allPlayerDetails = (state=[], action) => {
  switch(action.type) {
    case C.ADD_PLAYER :

    return [
              ...state.allPlayerDetails,
              action.payload
           ]
    case C.REMOVE_PLAYER :
      return state.allPlayerDetails.filter((i) => i.id !== action.payload)

    case C.ADD_PLAYER_NOTE :

    const index = action.payload.id;
    return [
      ...state[index].notes,
      action.payload.note
    ]

    default:
      return state
  }
}

export const allTeamDetails = (state = [], action) => {
  switch (action.type) {
    case C.ADD_TEAM :
      return action.payload

    case C.ADD_TEAM_NOTE :
        return [
          ...state.notes,
          action.payload
        ]

    default :
      return state
  }
}

export const gameDate = (state = null, action) =>
  (action.type === C.ADD_GAME_DATE) ?
    action.payload :
    state

export const opponent = (state = null, action) =>
  (action.type === C.ADD_OPPONENT) ?
    action.payload :
    state


// export const addPlayer = (state = {}, action) =>
//   (action.type === C.ADD_PLAYER) ?
//     [
//       ...state.allPlayerDetails,
//       action.payload
//     ] :
//     state

// export const addOpponent = (state = {}, action) =>
//   (action.type === C.ADD_OPPONENT) ?
//     action.payload :
//     state

// export const removePlayer = (state = {}, action) =>
//   (action.type === C.REMOVE_PLAYER) ?
//     state.allPlayerDetails.filter((i) => i.id !== action.payload) :
//     state
//
// export const addPlayerNote = function (state = {}, action) {
//   if (action.type === C.ADD_PLAYER_NOTE) {
//     const index = action.payload.id;
//     return [
//       ...state[index].notes,
//       action.payload.note
//     ]
//   } else {
//     return state
//   }
// }


export default combineReducers({
  allPlayerDetails,
  allTeamDetails,
  gameDate,
  opponent
})
