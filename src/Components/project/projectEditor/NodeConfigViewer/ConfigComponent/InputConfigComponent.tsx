import { ChangeEvent } from 'react';
import TextInput from '../../../../Input/TextInput';
import React from 'react';
import { AveragePooling2DConfig, IConfigComponent, InputConfig } from '../../../../../core/block';

type Props = {
  config: InputConfig,
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const InputConfigComponent = ({config, onChange}: Props) => {

  const {shape} = config

  const configComponent: IConfigComponent<typeof config> = {
    shape: <TextInput
      propertyName={'shape'}
      onChange={onChange}
      propertyContent={shape}/>
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

export default InputConfigComponent;
