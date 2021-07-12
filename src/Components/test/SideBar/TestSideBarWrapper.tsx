import { makeStyles } from '@material-ui/core';

const BorderColor = '#D9DADB';
const useStyle = makeStyles({
  wrapper: {
    border: `1px solid ${BorderColor}`,
    display: 'flex',
    flexDirection: 'column',
  },
});

const TestSideBarWrapper = ({ children } : {children : any}) => {
  const classes = useStyle();
  return (
    <div className={classes.wrapper}>
      {children}
    </div>
  );
};

export default TestSideBarWrapper;
