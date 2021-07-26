import { FormControl, makeStyles, MenuItem, Select, TextField } from '@material-ui/core';
import Input from './Input';
import Optimizers from '../../core/Optimizers';
import InputLabel from '@material-ui/core/InputLabel';
import { useState } from 'react';

const useStyle = makeStyles({
  propertyContentContainer: {
    width: '100%',
  },
});

interface Props {
  propertyName: string,
  propertyContent: string | string[] | number,
  propertyCandidates: Array<string | number>,
  onChange: any,
}

const SelectInput = (props: Props) => {
  const {propertyName, propertyContent, onChange, propertyCandidates} = props;
  const classes = useStyle();

  const candidateComponent = propertyCandidates.map((candidate) => {
    return (<MenuItem
      key={candidate}
      value={candidate}
    >
      {candidate}
    </MenuItem>)
  });

  const body = (
    <FormControl className={classes.propertyContentContainer}>
      <InputLabel>{propertyName}</InputLabel>
      <Select
        name={propertyName}
        onChange={onChange}
        value={propertyContent}
      >
        <MenuItem value={propertyContent}>
          {propertyContent}
        </MenuItem>
        {candidateComponent}
      </Select>
    </FormControl>
    )

  return (
    <Input
      body={body}
    />)
};

export default SelectInput;
