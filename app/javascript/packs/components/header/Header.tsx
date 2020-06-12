import * as React from 'react';
import styled from 'styled-components';

import Pomodoro from '../pomodoro/Pomodoro';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";


type Props = {
}

const Wrapper = styled.section`
`;


function Header(props: Props) {
  return (
    <Wrapper>
      <Router>
        <header>
          <nav>
            <ul>
              <li>
                <Link to="/">Sibyl</Link>
              </li>
              <li>
                <Link to="/pomodoro">pomodoro</Link>
              </li>
              <li>
                <Link to="/statistics">statistics</Link>
              </li>
            </ul>

            <ul>
              <li>mizushi@gmail.com</li>
            </ul>
          </nav>
        </header>
        <Switch>
          <Route path="/pomodoro">
            <Pomodoro />
          </Route>
        </Switch>
      </Router>
    </Wrapper>
  )
}

export default Header;
