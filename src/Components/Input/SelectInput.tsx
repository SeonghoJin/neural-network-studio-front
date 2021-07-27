import { FormControl, makeStyles, MenuItem, Select, TextField } from '@material-ui/core';
import Input from './Input';
import InputLabel from '@material-ui/core/InputLabel';

const useStyle = makeStyles({
  propertyContentContainer: {
    width: '100%',
  },
});

type Props = {
  propertyName: string,
  propertyContent: string | string[] | number,
  propertyCandidates: Array<string | number>,
  onChange: any,
}

const SelectInput = ({propertyContent, propertyName, propertyCandidates, onChange}: Props) => {
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
