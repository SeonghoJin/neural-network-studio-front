import { makeStyles, Slider, Typography } from '@material-ui/core';
import Input from './Input';
import { ChangeEvent, useState } from 'react';

const useStyle = makeStyles({
  propertyContentContainer: {
    width: '90%',
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center'
  },
});

type Mark = {
  value: number,
  label: string | number
}

export type Marks = Array<Mark>;

type Props = {
  propertyName: string,
  propertyContent: number,
  onChange: (e: ChangeEvent<any>) => void,
  min: number,
  max: number,
  step: number | null,
  marks?: Marks
};

const SliderInput = (props : Props) => {
  const classes = useStyle();
  const {propertyContent, propertyName, max, min, step, onChange, marks} = props

  const handleChange = (e : any, value: any) => {
    onChange({
      target: {
        name: propertyName,
        value: value
      }
    } as ChangeEvent<any>);
  }

  const body = (
    <Slider
      className={classes.propertyContentContainer}
      value={propertyContent}
      name={propertyName}
      step={step}
      min={min}
      max={max}
      marks={marks}
      onChangeCommitted={handleChange}
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
