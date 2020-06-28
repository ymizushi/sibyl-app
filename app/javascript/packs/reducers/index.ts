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


const fetchActivities = async () => {
  const item: any = document.getElementsByName('csrf-token').item(0);
  const csrfToken = item.content;
  const res = await fetch('http://localhost:3000/api/v1/activities.json', {
    method: 'GET',
    headers: new Headers({
      'Content-type' : 'application/json',
      'X-CSRF-Token': csrfToken
    })
    })
  const data = await res.json();
  console.log(data);
  return data;
}


function activities(state = [], action) {
  switch (action.type) {
    case 'FETCH_ACTIVITIES':
      return fetchActivities();
    default:
      return state;
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
  counter,
  activities
})
