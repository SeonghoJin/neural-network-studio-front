import { ChangeEvent } from 'react';
import TextInput from '../../../../Input/TextInput';
import React from 'react';
import {
  AveragePooling2DConfig,
  DropoutConfig,
  IConfigComponent,
  InputConfig
} from '../../../../../core/block';
import SliderInput, { Marks } from '../../../../Input/SliderInput';

type Props = {
  config: DropoutConfig,
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const marks : Marks = [
  {
    value: 0,
    label: 0
  },{
    value: 1,
    label: 1,
  }
]

const DropoutConfigComponent = ({config, onChange}: Props) => {

  const {rate} = config

  const configComponent: IConfigComponent<typeof config> = {
    rate: <SliderInput
      propertyName={'rate'}
      onChange={onChange}
      propertyContent={rate}
      max={1}
      min={0}
      step={0.1}
      marks={marks}
    />
  }

  const elements = [];

  for (const configComponentKey in configComponent) {
    const key = configComponentKey as keyof typeof configComponent
    elements.push(
      <li key={key}>
        {configComponent[key]}
      </li>
    );
  };

  return (<>
    {elements}
  </>)
}

export default DropoutConfigComponent;
