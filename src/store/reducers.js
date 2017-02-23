import C from '../constants'
import { combineReducers } from 'redux'


export const allPlayerDetails = (state=[], action) => {
  switch(action.type) {
    case C.ADD_PLAYER :

      return [
                ...state,
                action.payload
             ]

    case C.REMOVE_PLAYER :
      return state.filter((i) => i.id !== action.payload)

    case C.ADD_PLAYER_NOTE :

      const index = action.payload.id;

      console.log("STATE @ INDEX: ", state[index].notes)
      state[index].notes.push(action.payload.note)
      return state
      // return [
      //   ...state[index].notes,
      //   action.payload.note
      // ]

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


export default combineReducers({
  allPlayerDetails,
  allTeamDetails,
  gameDate,
  opponent
})
