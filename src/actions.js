import C from './constants'

export function addPlayer(id, name, position, height, isStarter, notes) {

  return {
    type: C.ADD_PLAYER,
    payload: {id, name, position, height, isStarter, notes}
  }

}

export function removePlayer(id) {

  return {
    type: C.REMOVE_PLAYER,
    payload: 1
  }

}

export const addOpponent = function(opponent) {
  return {
    type: C.ADD_OPPONENT,
    payload: opponent
  }
}

export const gameDate = function(gameDate) {
  return {
    type: C.ADD_GAME_DATE,
    payload: gameDate
  }
}


export const removePlayerNote = function(noteId) {
  return {
    type: C.REMOVE_PLAYER_NOTE,
    paylod: noteId
  }
}
