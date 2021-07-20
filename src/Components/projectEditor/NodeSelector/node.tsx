import { Button, makeStyles } from '@material-ui/core';
import React from 'react';
import { BlockState } from '../../../core/block/BlockState';

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

const Node = ({ state } : {state : BlockState}) => {
  const classes = useBlockStyle();
  const onDragStart = (event : React.DragEvent, nodeType : string) => {
    const localEvent = event;
    localEvent.dataTransfer.setData('application/nodetype', nodeType);
    console.log(localEvent.dataTransfer.types);
    localEvent.dataTransfer.setData('application/nodedata', JSON.stringify(state));
    localEvent.dataTransfer.effectAllowed = 'copy';
  };

  return (
    <li className={classes.Wrapper}>
      <Button
        className={classes.item}
        draggable={true}
        onDragStart={
          (event) => {
            onDragStart(event, state.type);
          }
        }>
        <h5 style={{ margin: 0 }}>
          {state.type}
        </h5>
      </Button>
    </li>
  );
};

export default Node;
