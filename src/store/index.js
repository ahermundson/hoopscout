import C from '../constants'
import appReducer from './reducers'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'


//Gives us the action that is currently being dispatched and the mechanism to dispatch the action
const consoleMessages = store => next => action => {
  let result

  console.log(`dispatching action => ${action.type}`)

  result = next(action)

  let { allPlayerDetails, allTeamDetails, gameDate, opponent } = store.getState()

  console.log(`
    # of players: ${allPlayerDetails.length}
    player list: ${JSON.stringify(allPlayerDetails)}
    opponent: ${opponent}
    game date: ${gameDate}
  `)

  return result
}

export default (initialState = {}) => {
  return applyMiddleware(consoleMessages, thunk)(createStore)(appReducer, initialState)
}
