import { makeStyles, TextField } from '@material-ui/core';
import Input from './Input';
import { ChangeEvent, useCallback } from 'react';
import { useState } from 'react';
import { numberWithoutSpacesRegExp } from './Validation';

const useStyle = makeStyles({
  propertyContentContainer: {
    width: '100%',
  },
});

type Props = {
  propertyName: string,
  propertyContent: number,
  onChange: any,
}

const NumberInput = ({propertyName, propertyContent, onChange} : Props) => {
  const classes = useStyle();

  const isVaild = useCallback((str : string) => {
    return numberWithoutSpacesRegExp.test(str);
  },[])

  const [error, setError] = useState(!isVaild(propertyContent.toString()));

  const handleChange = useCallback((e : ChangeEvent<HTMLInputElement>) => {
    HTMLInputElement
    onChange({
      ...e,
      target: {
        name: e.target.name,
        value: Number(e.target.value)
      }
    });
    setError(!isVaild(e.target.value));
  }, [onChange])

  const body = (
    <TextField
      error={error}
      name={propertyName}
      onChange={handleChange}
      value={propertyContent}
      type="number"
      className={classes.propertyContentContainer}
      variant={'standard'}
      label={propertyName}
      placeholder={"12345"}
    />)

    return (
      <Input
        body={body}
    />)
};

export default NumberInput;
