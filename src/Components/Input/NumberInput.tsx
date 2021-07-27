import { makeStyles, TextField } from '@material-ui/core';
import Input from './Input';
import { ChangeEvent } from 'react';
import { numberWithoutSpacesRegExp } from './validation';
import { useState } from 'react';

const useStyle = makeStyles({
  propertyContentContainer: {
    width: '100%',
  },
});

type Props = {
  propertyName: string,
  propertyContent: string | string[] | number,
  onChange: any,
}

const NumberInput = ({propertyName, propertyContent, onChange} : Props) => {
  const classes = useStyle();
  const [error, setError] = useState(numberWithoutSpacesRegExp.test(propertyContent as string));

  const handleChange = (e : ChangeEvent<any>) => {
    onChange(e);
    setError(numberWithoutSpacesRegExp.test(e.target.value));
  }

  const body = (
    <TextField
      error={!error}
      name={propertyName}
      onChange={handleChange}
      value={propertyContent}
      type="text"
      className={classes.propertyContentContainer}
      variant={'standard'}
      label={propertyName}
    />)

    return (
      <Input
        body={body}
    />)
};

export default NumberInput;
