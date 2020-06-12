import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Header from './components/header/Header';

const App = ({name: string}) => {
  return (
  <>
    <Header name={name} />
  </>
)
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App name="sibyl" />,
    document.body.appendChild(document.createElement('div')),
  )
})
