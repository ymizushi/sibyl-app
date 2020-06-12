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
  name: string;
}

const Nav = styled.nav`
  background-color: #F6AE2D;
  font-size: 2rem;
  text-align: left;
`


const MenuList = styled.ul`
  list-style: none;
   display: table;
}
`

const MenuElementTitle = styled.li`
  margin-left: 0px;
  padding: 0px;
  display: inline;
`

const MenuElement = styled.li`
  margin: 0rem;
  display: inline;
`

const HeaderMenu = styled.span`
  color: white;
`

function Header({name}: Props) {
  return (
    <Router>
      <header>
        <Nav>
          <MenuList>
            <MenuElement>
              <Link to="/">
                <HeaderMenu>{name}</HeaderMenu>
              </Link>
            </MenuElement>
            <MenuElement>
              <Link to="/pomodoro"><HeaderMenu>pomodoro</HeaderMenu></Link>
            </MenuElement>
            <MenuElement>
              <Link to="/statistics"><HeaderMenu>statistics</HeaderMenu></Link>
            </MenuElement>
          </MenuList>
          <MenuList>
            <MenuElement><HeaderMenu>mizushi@gmail.com</HeaderMenu></MenuElement>
          </MenuList>
        </Nav>
      </header>
      <Switch>
        <Route path="/pomodoro">
          <Pomodoro />
        </Route>
      </Switch>
    </Router>
  )
}

export default Header;
