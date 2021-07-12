import { makeStyles } from '@material-ui/core';

const useStyle = makeStyles({
  wrapper: {
    width: '100%',
    height: '100%',
    padding: 5,
    paddingLeft: 30,
  },
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
  },
  propertyNameWrapper: {
    flexGrow: 3,
  },
  propertyContentWrapper: {
    flexGrow: 7,
  },
  propertyContentContainer: {
    height: '100%',
    width: '100%',
    backgroundColor: 'white',
    border: 0,
    '&:focus': {
      outline: '1px solid black',
    },
  },
});

const Input = () => {
  const classes = useStyle();

  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <div className={classes.propertyNameWrapper}>
          name
        </div>
        <div className={classes.propertyContentWrapper}>
          <input type="text" className={classes.propertyContentContainer}>
          </input>
        </div>
      </div>
    </div>
  );
};

export default Input;
