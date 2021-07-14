import { makeStyles } from '@material-ui/core';
import 'react-bootstrap/dist/react-bootstrap.min';
import React from 'react';
import TestSideBarWrapper from './TestSideBarWrapper';
import BlockConfigureContainter from '../BlockConfigureContainer';
import BlockList from '../BlockList';
import Block from '../BlockList/Block';
import { blockStates } from '../../../core/block/BlockState';

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

const blocks = blockStates;

const BlockListContainer = () => {
  const classes = useBlockListsStyle();
  return (
    <div className={classes.wrapper}>
      <ul className={classes.blockListsWrapper}>
        {blocks.map((block) => {
          return <BlockList key={block.type} name={block.type} elementNumber={block.states.length}>
            {block.states.map((blockState, index) => {
              return <Block key={index} state={blockState}></Block>;
            })}
        </BlockList>;
        })}
      </ul>
    </div>
  );
};

const TestSideBarLeft1 = () => {
  return (
    <TestSideBarWrapper>
      <BlockListContainer/>
      <BlockConfigureContainter/>
    </TestSideBarWrapper>);
};

export default TestSideBarLeft1;
