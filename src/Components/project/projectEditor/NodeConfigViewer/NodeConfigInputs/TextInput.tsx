import { makeStyles } from '@material-ui/core';

const useStyle = makeStyles({
  wrapper: {
    width: '100%',
    height: '100%',
    padding: 5,
  },
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  propertyNameWrapper: {
    flexGrow: 3,
  },
  propertyName: {
    margin: 0,
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

const TextInput = ({ propertyName, propertyContent, onChange}
  : {propertyName: string, propertyContent: string, onChange: any}) => {
  const classes = useStyle();
  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <div className={classes.propertyNameWrapper}>
          <h4 className={classes.propertyName}>
            {propertyName}
          </h4>
        </div>
        <div className={classes.propertyContentWrapper}>
          <input
            onChange={(e) => { onChange(propertyName, e.target.value); } }
            value={propertyContent}
            type="text"
            className={classes.propertyContentContainer}
          >
          </input>
        </div>
      </div>
    </div>
  );
};

export default TextInput;
