import { ChangeEvent } from 'react';
import TextInput from '../../../../Input/TextInput';
import React from 'react';
import {
  AveragePooling2DConfig,
  BatchNormalizationConfig, Conv2DConfig,
  IConfigComponent,
  InputConfig
} from '../../../../../core/block';

type Props = {
  config: Conv2DConfig,
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const Conv2DConfigComponent = ({config, onChange}: Props) => {

  const {padding, strides, kernel_size, filters} = config

  const configComponent: IConfigComponent<typeof config> = {
    filters: <TextInput
      onChange={onChange}
      propertyContent={filters}
      propertyName={'filters'}
    />,
    kernel_size: <TextInput
      onChange={onChange}
      propertyContent={kernel_size}
      propertyName={'kernel_size'}
    />,
    padding:<TextInput
      onChange={onChange}
      propertyContent={padding}
      propertyName={'padding'}
    />,
    strides:<TextInput
      onChange={onChange}
      propertyContent={strides}
      propertyName={'strides'}
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

export default Conv2DConfigComponent;
