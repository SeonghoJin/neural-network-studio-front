import { makeStyles, TextField } from '@material-ui/core';
import Input from './Input';
import { ChangeEvent } from 'react';
import { floatWithoutSpacesRegExp, numberWithoutSpacesRegExp } from './validation';
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

const FloatInput = ({propertyName, propertyContent, onChange} : Props) => {
  const classes = useStyle();
  const [error, setError] = useState(floatWithoutSpacesRegExp.test(propertyContent as string));

  const handleChange = (e : ChangeEvent<any>) => {
    onChange(e);
    setError(floatWithoutSpacesRegExp.test(e.target.value));
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
      placeholder={"123.123"}
    />)

    return (
      <Input
        body={body}
    />)
};

export default FloatInput;
