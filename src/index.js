import React from 'react';
import { render } from 'react-dom';
import storeFactory from './store'
import { addPlayer, removePlayer, addOpponent, gameDate } from './actions'

window.React = React

render(
  <h1>Test</h1>,
  document.getElementById('react-container')
);

const initialState = localStorage['redux-store'] ? JSON.parse(localStorage['redux-store']) : {}

const store = storeFactory()

store.dispatch(
  addPlayer(2, "Nora Hermundson", "Guard", "5'3", true, [])
)

store.dispatch(
  addPlayer(1, "Katie Hermundson", "Guard", "5'3", true, [])
)

store.dispatch(
  removePlayer(1)
)

store.dispatch(
  addOpponent("Washburn")
)

store.dispatch(
  gameDate("2017-02-23")
)
