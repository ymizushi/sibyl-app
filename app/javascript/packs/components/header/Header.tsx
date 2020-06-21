import * as React from 'react';
import styled from 'styled-components';

import Pomodoro from '../pomodoro/Pomodoro';
import Statistics from '../statistics/Statistics';

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
  margin: 0rem;
  padding: 1rem;
  background-color: #F6AE2D;
  font-size: 2rem;
  text-align: left;
`


const MenuList = styled.ul`
}
`

const RightMenuList = styled.ul`
}
`

const MenuElementTitle = styled.li`
  margin-left: 0rem;
  padding: 0rem;
  display: inline;
`

const MenuElement = styled.li`
  margin: 0rem;
  display: inline;
`

const RightMenuElement = styled.li`
  margin: 0rem;
  display: right;
`

const HeaderMenu = styled.span`
  color: white;
  margin-left: 2rem;
`


const HeaderTitle = styled(HeaderMenu)`
  margin-left: 1rem;
  font-size: 2.5rem;
`

const LeftMenu = styled.div`
  float: left;
`

const RightMenu = styled.div`
  float: right;
`

const ClearBoth = styled.div`
  clear: both;
`

function Header({name}: Props) {
  return (
    <Router>
      <header>
        <Nav>
          <LeftMenu>
            <MenuList>
                <MenuElement>
                  <Link to="/" style={{ textDecoration: 'none' }}>
                    <HeaderTitle>{name}</HeaderTitle>
                  </Link>
                </MenuElement>
                <MenuElement>
                  <Link to="/pomodoro" style={{ textDecoration: 'none' }}><HeaderMenu>pomodoro</HeaderMenu></Link>
                </MenuElement>
                <MenuElement>
                  <Link to="/statistics" style={{ textDecoration: 'none' }}><HeaderMenu>statistics</HeaderMenu></Link>
                </MenuElement>
            </MenuList>
          </LeftMenu>

          <RightMenu>
            <MenuList>
                <MenuElement>
                  <HeaderMenu>mizushi@gmail.com</HeaderMenu>
                </MenuElement>
            </MenuList>
          </RightMenu>
          <ClearBoth />
        </Nav>
      </header>
      <Switch>
        <Route path="/pomodoro">
          <Pomodoro />
        </Route>
        <Route path="/statistics">
          <Statistics />
        </Route>
      </Switch>
    </Router>
  )
}

export default Header;
