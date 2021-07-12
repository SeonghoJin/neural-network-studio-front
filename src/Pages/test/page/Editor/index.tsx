import { makeStyles } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import React from 'react';
import { ReactFlowProvider } from 'react-flow-renderer';
import TestNav1 from '../../../../Components/test/NavigationBar/TestNav1';
import TestSideBarLeft1 from '../../../../Components/test/SideBar/TestSideBarLeft1';
import TestReactFlow from '../../../../Components/test/ReactFlow/TestReactFlow';
import TestSideBarRight1 from '../../../../Components/test/SideBar/TestSideBarRight1';
import { ReactFlowElementProvider } from '../../../../core/Context/ElementProvider/ElementProvider';

const useStyle = makeStyles({
  wrapper: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    maxWidth: '1440px',
    flexGrow: 1,
  },
});

const Editor = () => {
  const classes = useStyle();
  return (
  <div className={classes.wrapper}>
    <TestNav1></TestNav1>
    <Container className={classes.container}>
      <ReactFlowElementProvider>
        <ReactFlowProvider>
          <TestSideBarLeft1/>
          <TestReactFlow/>
          <TestSideBarRight1/>
        </ReactFlowProvider>
      </ReactFlowElementProvider>
    </Container>
  </div>
  );
};

export default Editor;
