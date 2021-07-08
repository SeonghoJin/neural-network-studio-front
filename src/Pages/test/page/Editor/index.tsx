import { makeStyles } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import React from 'react';
import { ReactFlowProvider } from 'react-flow-renderer';
import TestNav1 from '../../../../Components/test/NavigationBar/TestNav1';
import TestSideBar1 from '../../../../Components/test/SideBar/TestSideBar1';
import TestReactFlow from '../../../../Components/test/ReactFlow/TestReactFlow';

const useStyle = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'row',
    height: '100vh',
  },
});

const Editor = () => {
  const classes = useStyle();
  return (
  <>
    <TestNav1></TestNav1>
    <Container className={classes.container}>
      <ReactFlowProvider>
        <TestSideBar1/>
        <TestReactFlow/>
      </ReactFlowProvider>
    </Container>
  </>
  );
};

export default Editor;
