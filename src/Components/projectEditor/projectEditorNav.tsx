import {
  BottomNavigation, BottomNavigationAction, Container, makeStyles,
} from '@material-ui/core';
import React, { useState } from 'react';
import { Favorite, RestorePage } from '@material-ui/icons';
import { Link } from 'react-router-dom';

const useStyled = makeStyles({
  wrapper: {
    width: '100%',
  },
  container: {
    width: '100%',
    display: 'flex',
    backgroundColor: '#F7F7F7',
  },
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#00000000',
  },
});

const ProjectEditorNav = () => {
  const classes = useStyled();
  const [value, setValue] = useState(0);

  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
      <Container>
        <div className={classes.root}>
          <Link to={'/project/1'}>
            <h2>
              Neural Network Studio
            </h2>
          </Link>
          <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }
            }
            className={classes.root}
          >
            <BottomNavigationAction label="Poject" icon={<RestorePage/>}/>
            <BottomNavigationAction label="ProjectConfig" icon={<Favorite/>}/>
          </BottomNavigation>
        </div>
      </Container>
      </div>
    </div>);
};

export default ProjectEditorNav;
