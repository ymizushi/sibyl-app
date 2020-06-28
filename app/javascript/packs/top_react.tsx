import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Header from './components/header/Header';
import { createStore } from 'redux'

import reducer from './reducers/index'

import { Provider } from 'react-redux'

const store = createStore(reducer)


type Props = {
  name: string;
}

const App = ({name}: Props) => {
  return (
  <>
    <Header name={name} />
  </>
)
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
     <Provider store={store}>
      <App name="Sibyl" />
    </Provider>,
    document.body.appendChild(document.createElement('div')),
  )
})
