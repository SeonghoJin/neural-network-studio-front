import { Button, makeStyles } from '@material-ui/core';
import 'react-bootstrap/dist/react-bootstrap.min';
import React from 'react';
import TestSideBarWrapper from './TestSideBarWrapper';
import BlockConfigureContainter from '../BlockConfigureContainer';
import BlockList from '../BlockList';

const BorderColor = '#D9DADB';

const useBlockListsStyle = makeStyles({
  wrapper: {
    width: 280,
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

const BlockListContainer = () => {
  const classes = useBlockListsStyle();
  return (
    <div className={classes.wrapper}>
      <ul className={classes.blockListsWrapper}>
        <BlockList
          elementNumber={10}
          name="test"
        >
          <Block></Block>
          <Block></Block>
          <Block></Block>
          <Block></Block>
          <Block></Block>
          <Block></Block>
          <Block></Block>
          <Block></Block>
          <Block></Block>
          <Block></Block>
        </BlockList>
        <BlockList
          elementNumber={4}
          name="IO"
        >
          <Block></Block>
          <Block></Block>
          <Block></Block>
          <Block></Block>
        </BlockList>
      </ul>
    </div>
  );
};

const TestSideBarLeft1 = () => (
    <TestSideBarWrapper>
      <BlockListContainer/>
      <BlockConfigureContainter/>
    </TestSideBarWrapper>);

export default TestSideBarLeft1;
