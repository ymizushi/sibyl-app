import { combineReducers } from 'redux';

function counter(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}

function sibyl(state = {}, action) {
  switch (action.type) {
    case 'SET_NAME':
      return {...state, name: action.payload.name }
    default:
      return state
  }
}

export default combineReducers({
  sibyl,
  counter
})
