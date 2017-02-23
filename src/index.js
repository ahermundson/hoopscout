import C from './constants'
import { addGameDate, addOpponent } from './store/reducers'
import initialState from './initialState.json'

let state = initialState

console.log(`

  Initial State
  =============

  players: ${JSON.stringify(state.allPlayerDetails)}
  team: ${JSON.stringify(state.allTeamDetails)}
  game date: ${state.gameDate}
  opponent: ${state.opponent}

`)


state.gameDate = addGameDate(state, {
  type: C.ADD_GAME_DATE,
  payload: "2016-02-28"
})

state.opponent = addOpponent(state, {
  type: C.ADD_OPPONENT,
  payload: "Washburn"
})

console.log(`

  Next State
  =============

  players: ${JSON.stringify(state.allPlayerDetails)}
  team: ${JSON.stringify(state.allTeamDetails)}
  game date: ${state.gameDate}
  opponent: ${JSON.stringify(state.opponent)}

`)
