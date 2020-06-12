import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Header from './components/header/Header';
import styled from 'styled-components';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const App = ({name: string}) => {
  return (
  <>
    <Header />
  </>
)
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App name="sibyl" />,
    document.body.appendChild(document.createElement('div')),
  )
})
