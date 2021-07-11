import {
  BottomNavigation, BottomNavigationAction, Container, makeStyles,
} from '@material-ui/core';
import React, { useState } from 'react';
import { Favorite, LocationOn, RestorePage } from '@material-ui/icons';

const useStyled = makeStyles({
  NavWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#F7F7F7',
  },
  root: {
    alignItems: 'center',
    backgroundColor: '#00000000',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  logo: {
    marginRight: 15,
  },
});

const NavWrapper = ({ children } : {children : any}) => {
  const classes = useStyled();
  return (
<nav className={classes.NavWrapper}>
  {children}
</nav>);
};
const TestNav1 = () => {
  const classes = useStyled();
  const [value, setValue] = useState(0);

  return (
  <NavWrapper>
    <Container style={{ maxWidth: 1440 }}>
      <div className={classes.root}>
      <a className={classes.logo}>
        <h1>
        Neural Network Studio
        </h1>
      </a>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }
        }
        className={classes.root}
      >
        <BottomNavigationAction label="Recents" icon={<RestorePage/>}/>
        <BottomNavigationAction label="Favorites" icon={<Favorite/>}/>
        <BottomNavigationAction label="Nearby" icon={<LocationOn/>}/>
      </BottomNavigation>
      </div>
    </Container>
</NavWrapper>);
};

export default TestNav1;
