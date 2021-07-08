import { Button, makeStyles, Theme } from '@material-ui/core';
import 'react-bootstrap/dist/react-bootstrap.min';
import React, { useState } from 'react';

const BorderColor = '#D9DADB';

const useStyle = makeStyles({
  leftContent: {
    width: 280,
    borderRight: `1px solid ${BorderColor}`,
  },
});

const useBlockListsStyle = makeStyles({
  Wrapper: {
    height: '60%',
    overflow: 'auto',
    borderBottom: `1px solid ${BorderColor}`,
  },
  blockListsWrapper: {
    paddingRight: 10,
    paddingLeft: 0,
    listStyle: 'none',
  },
});

interface BlockListProps {
  elementNumber : number;
}

const useBlockListStyle = makeStyles<Theme, BlockListProps>(() => ({
  BlockListWrapper: {},
  Wrapper: {
    padding: 0,
    listStyle: 'none',
  },
  item: {
    zIndex: 1000,
    width: '100%',
    margin: 0,
    justifyContent: 'flex-start',
    '&::before': {
      lineHeight: 0,
      display: 'flex',
      marginRight: 3,
      content: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'16\' height=\'16\' viewBox=\'0 0 16 16\'%3e%3cpath fill=\'none\' stroke=\'rgba%280,0,0,.5%29\' stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M5 14l6-6-6-6\'/%3e%3c/svg%3e")',
      transition: 'all ease 0.5s',
    },
  },
  active: {
    '&::before': {
      transform: 'rotate(90deg)',
    },
  },
  collapse: {
    overflow: 'hidden',
    height: 0,
    transition: 'height ease-in-out 0.5s',
  },
  show: {
    opacity: 1,
    height: ({ elementNumber }) => elementNumber * 33,
  },
}));

const useBlockStyle = makeStyles({
  Wrapper: {
    paddingLeft: 30,
  },
  item: {
    width: '100%',
    margin: 0,
    justifyContent: 'flex-start',
  },
});

const Block = () => {
  const classes = useBlockStyle();

  const onDragStart = (event : React.DragEvent, nodeType : string) => {
    const localEvent = event;
    localEvent.dataTransfer.setData('application/reactflow', nodeType);
    localEvent.dataTransfer.effectAllowed = 'copy';
    console.log('dragStart');
  };

  return (
    <li className={classes.Wrapper}>
      <Button className={classes.item} draggable={true} onDragStart={(event) => onDragStart(event, 'default')}>
        <h5 style={{ margin: 0 }}>
          Input
        </h5>
      </Button>
    </li>
  );
};

const BlockList = () => {
  const classes = useBlockListStyle({ elementNumber: 5 });

  // eslint-disable-next-line no-unused-vars
  const [collapse, setCollapse] = useState(true);

  const onCollapseToggle = () => {
    setCollapse((pre) => !pre);
  };

  return (
      <li className={classes.BlockListWrapper}>
        <Button onClick={onCollapseToggle} className={`${classes.item} ${collapse ? '' : classes.active}`}>
          <h3 style={{ margin: 0 }}>IO</h3>
        </Button>
        <ul className={`${classes.Wrapper} ${classes.collapse} ${collapse ? '' : classes.show}`}>
          <Block/>
          <Block/>
          <Block/>
          <Block/>
          <Block/>
        </ul>
      </li>
  );
};

const BlockLists = () => {
  const classes = useBlockListsStyle();
  return (
    <div className={classes.Wrapper}>
      <ul className={classes.blockListsWrapper}>
          <BlockList/>
          <BlockList/>
          <BlockList/>
          <BlockList/>
          <BlockList/>
          <BlockList/>
          <BlockList/>
      </ul>
    </div>
  );
};

const TestSideBar1 = () => {
  const classes = useStyle();
  return (
    <div className={classes.leftContent}>
      <BlockLists/>
    </div>
  );
};

export default TestSideBar1;
