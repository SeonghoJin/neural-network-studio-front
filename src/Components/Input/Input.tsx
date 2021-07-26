import { makeStyles } from '@material-ui/core';
import { ReactElement, useCallback } from 'react';

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

interface Props {
  head?: ReactElement
  body: ReactElement,
}

const Input = (props : Props) => {
  const {head, body} = props
  const classes = useStyle();


  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        {head && <div className={classes.propertyNameWrapper}>
          {head}
        </div>}
        <div className={classes.propertyContentWrapper}>
          {body}
        </div>
      </div>
    </div>
  );
};

export default Input;
