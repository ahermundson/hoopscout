import C from './constants'
import appReducer from './store/reducers'
// import initialState from './initialState.json'
import { createStore } from 'redux'

const store = createStore(appReducer)

store.subscribe(() => console.log(store.getState()))

store.dispatch({
  type: C.ADD_GAME_DATE,
  payload: "2016-02-28"
})

store.dispatch({
  type: C.ADD_PLAYER,
  payload: {
    "id": 2,
    "name": "Nora Hermundson",
    "position": "Guard",
    "height": "5'3\"",
    "isStarter": true,
    "notes": [

    ]
  }
})




// console.log(`
//
//   Initial State
//   =============
//
//   players: ${JSON.stringify(state.allPlayerDetails)}
//   team: ${JSON.stringify(state.allTeamDetails)}
//   game date: ${state.gameDate}
//   opponent: ${state.opponent}
//
// `)
//
// state = appReducer(state, {
//   type: C.ADD_GAME_DATE,
//   payload: "2016-02-28"
// })
//
// state = appReducer(state, {
//   type: C.ADD_OPPONENT,
//   payload: "Washburn"
// })
//
// state = appReducer(state, {
//   type: C.ADD_TEAM_NOTE,
//   payload: "1-3-1 zone out of timeouts"
// })
//
// state = appReducer(state, {
//   type: C.ADD_PLAYER,
//   payload: {
//     "id": state.allPlayerDetails.length,
//     "name": "Nora Hermundson",
//     "position": "Guard",
//     "height": "5'3\"",
//     "isStarter": true,
//     "notes": [
//
//     ]
//   }
// })
//
// state = appReducer(state, {
//   type: C.REMOVE_PLAYER,
//   payload: 1
// })
//
// state = appReducer(state, {
//   type: C.ADD_PLAYER_NOTE,
//   payload: {
//     "id": 1,
//     "note": "Hates broccoli"
//   }
// })
//
// console.log(`
//
//   Next State
//   =============
//
//   players: ${JSON.stringify(state.allPlayerDetails)}
//   team: ${JSON.stringify(state.allTeamDetails)}
//   game date: ${state.gameDate}
//   opponent: ${state.opponent}
//
// `)
