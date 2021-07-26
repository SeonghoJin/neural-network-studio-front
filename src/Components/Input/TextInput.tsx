import { makeStyles } from '@material-ui/core';
import Input from './Input';

const useStyle = makeStyles({
  wrapper: {
    width: '100%',
    padding: 5,
  },
  container: {
    width: '100%',
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
    width: '100%',
    backgroundColor: 'white',
    border: 0,
    '&:focus': {
      outline: '1px solid black',
    },
  },
});

const TextInput = ({ propertyName, propertyContent, onChange}
  : {propertyName: string, propertyContent: string | string[] | number, onChange: any}) => {
  const classes = useStyle();
  const head = (
    <h4 className={classes.propertyName}>
      {propertyName}
    </h4>
  )

  const body = (
    <input
      name={propertyName}
      onChange={(e) => { onChange(e); } }
      value={propertyContent}
      type="text"
      className={classes.propertyContentContainer}
    />)

    return (
      <Input
        head={head}
        body={body}
    />)
};

export default TextInput;
