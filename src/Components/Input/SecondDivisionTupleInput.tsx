import { makeStyles, TextField } from '@material-ui/core';
import Input from './Input';
import { ChangeEvent } from 'react';
import {
  numberWithoutSpacesRegExp,
  secondDivisionTupleRegExp
} from './validation';
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
  canNull?: boolean
}

const SecondDivisionTupleInput = ({propertyName, propertyContent, onChange, canNull} : Props) => {
  const classes = useStyle();

  const isVaild = (str: string) => {
    if(canNull && str.trim() == "")return true;
    return secondDivisionTupleRegExp.test(str);
  }

  const [error, setError] = useState(isVaild(propertyContent as string));

  const handleChange = (e : ChangeEvent<any>) => {
    onChange(e);
    setError(isVaild(e.target.value));
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
      placeholder={"123, 456"}
    />)

    return (
      <Input
        body={body}
    />)
};

export default SecondDivisionTupleInput;
