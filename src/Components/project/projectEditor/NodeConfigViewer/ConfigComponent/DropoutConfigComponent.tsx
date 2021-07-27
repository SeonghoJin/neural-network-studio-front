import { ChangeEvent } from 'react';
import TextInput from '../../../../Input/TextInput';
import React from 'react';
import {
  AveragePooling2DConfig,
  DropoutConfig,
  IConfigComponent,
  InputConfig
} from '../../../../../core/block';

type Props = {
  config: DropoutConfig,
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const DropoutConfigComponent = ({config, onChange}: Props) => {

  const {rate} = config

  const configComponent: IConfigComponent<typeof config> = {
    rate: <TextInput
      propertyName={'rate'}
      onChange={onChange}
      propertyContent={rate}/>
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
