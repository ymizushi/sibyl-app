import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as Modal from 'react-modal';

import Header from './components/header/Header';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



export default function AppHoge() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      </div>
    </Router>
  );
}



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
