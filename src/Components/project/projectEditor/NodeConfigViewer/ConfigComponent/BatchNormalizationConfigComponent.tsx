import { ChangeEvent } from 'react';
import TextInput from '../../../../Input/TextInput';
import React from 'react';
import {
  AveragePooling2DConfig,
  BatchNormalizationConfig,
  IConfigComponent,
  InputConfig
} from '../../../../../core/block';

type Props = {
  config: BatchNormalizationConfig,
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const BatchNormalizationConfigComponent = ({config, onChange}: Props) => {

  const {axis, epsilon, momentum} = config

  const configComponent: IConfigComponent<typeof config> = {
    axis: <TextInput
      propertyName={'axis'}
      propertyContent={axis}
      onChange={onChange}
    />,
    epsilon:<TextInput
      propertyName={'epsilon'}
      propertyContent={epsilon}
      onChange={onChange}
    />,
    momentum: <TextInput
      propertyName={'momentum'}
      propertyContent={momentum}
      onChange={onChange}
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

export default BatchNormalizationConfigComponent;
