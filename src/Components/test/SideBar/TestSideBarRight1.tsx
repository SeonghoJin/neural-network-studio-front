import 'react-bootstrap/dist/react-bootstrap.min';
import React from 'react';
import { MiniMap } from 'react-flow-renderer';
import { makeStyles } from '@material-ui/core';
import TestSideBarWrapper from './TestSideBarWrapper';

const useStyle = makeStyles({
  wrapper: {
    width: 'auto',
  },
  miniMap: {
    position: 'static',
  },
});
const TestSideBarRight1 = () => {
  const classes = useStyle();
  return (
    <TestSideBarWrapper>
      <div className={classes.wrapper}>
        <MiniMap className={classes.miniMap}
          nodeStrokeColor={(n) => {
            if (n.type === 'input') return '#0041d0';
            if (n.type === 'selectorNode') return '#1A192B';
            if (n.type === 'output') return '#ff0072';
            return '#000000';
          }}
          nodeColor={(n) => {
            if (n.type === 'selectorNode') return '#1A192B';
            return '#000000';
          }}
        />
      </div>
    </TestSideBarWrapper>
  );
};

export default TestSideBarRight1;
