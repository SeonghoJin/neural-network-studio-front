import { ChangeEvent, useMemo } from 'react';
import TextInput from '../../../../Input/TextInput';
import React from 'react';
import { AveragePooling2DConfig, IConfigComponent } from '../../../../../core/block';

type Props = {
  config: AveragePooling2DConfig,
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const AveragePooling2DConfigComponent = ({config, onChange}: Props) => {

  const {padding, strides, pool_size} = config

  const configComponent: IConfigComponent<typeof config> = {
    padding: <TextInput
      propertyContent={padding}
      propertyName={'padding'}
      onChange={onChange}/>,
    pool_size: <TextInput
      propertyContent={pool_size}
      propertyName={'pool_size'}
      onChange={onChange}/>,
    strides: <TextInput
      propertyContent={strides}
      propertyName={'strides'}
      onChange={onChange}/>,
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

export default AveragePooling2DConfigComponent;
