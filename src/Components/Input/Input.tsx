import { makeStyles } from '@material-ui/core';
import { ReactElement } from 'react';

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
  propertyHeadWrapper: {
    flexGrow: 3,
  },
  propertyBodyContainer: {
    width: '100%',
    border: 0,
    '&:focus': {
      outline: '1px solid black',
    },
  },
});

type Props = {
  head?: ReactElement
  body: ReactElement,
}

const Input = ({head, body} : Props) => {
  const classes = useStyle();

  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        {head && <div className={classes.propertyHeadWrapper}>
          {head}
        </div>}
        <div className={classes.propertyBodyContainer}>
          {body}
        </div>
      </div>
    </div>
  );
};

export default Input;
