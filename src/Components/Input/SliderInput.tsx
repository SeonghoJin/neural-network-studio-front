import { makeStyles, Slider, Typography } from '@material-ui/core';
import Input from './Input';
import { ChangeEvent } from 'react';

const useStyle = makeStyles({
  propertyContentContainer: {
    width: '100%',
  },
});

type Props = {
  propertyName: string,
  propertyContent: number,
  onChange: (e: ChangeEvent<any>) => void,
  min: number,
  max: number,
  step: number,
};

const SliderInput = (props : Props) => {
  const classes = useStyle();
  const {propertyContent, propertyName, max, min, step, onChange} = props
  const body = (
    <Slider
      className={classes.propertyContentContainer}
      value={propertyContent}
      name={propertyName}
      step={step}
      min={min}
      max={max}
      marks={true}
      onChange={onChange}
      valueLabelDisplay={'auto'}
    >
    </Slider>
  )

  const head = (
    <Typography gutterBottom>
      {propertyName}
    </Typography>
  );

  return (
    <Input
      body={body}
      head={head}
    />)
};

export default SliderInput;
