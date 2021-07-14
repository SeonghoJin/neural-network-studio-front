import { makeStyles } from '@material-ui/core';
import React, {
  forwardRef, Ref, useImperativeHandle, useRef,
} from 'react';

const useStyles = makeStyles({
  style: {
    border: '1px solid black',
    height: 300,
    width: 300,
    overflow: 'auto',
    position: 'relative',
  },
  innerStyle: {
    width: '100%',
    height: 650,
    background: 'linear-gradient(white, black)',
  },
});

interface RefObject{
  scrollToBottom : () => void;
}
const ScollBox = forwardRef((props : any, ref : Ref<RefObject>) => {
  const classes = useStyles();
  // eslint-disable-next-line no-unused-vars
  const myRef = useRef<HTMLDivElement>(null);
  const scrollToBottom = () => {
    if (myRef.current) {
      const { scrollHeight, clientHeight } = myRef.current;
      const element = myRef.current;
      element.scrollTop = scrollHeight - clientHeight;
    }
  };

  useImperativeHandle(ref, () => ({ scrollToBottom }));
  return (
    <div
      className={classes.style}
      ref={myRef}
    >
      <div className={classes.innerStyle}></div>
    </div>
  );
});
const test = () => {
  const ref = useRef<RefObject>(null);
  return (
    <div>
      <ScollBox ref={ref}></ScollBox>
      <button onClick={() => { ref.current?.scrollToBottom(); }}>
        맨 밑으로
      </button>
    </div>
  );
};

export default test;
