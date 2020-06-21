import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Header from './components/header/Header';

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
    <App name="Sibyl" />,
    document.body.appendChild(document.createElement('div')),
  )
})
