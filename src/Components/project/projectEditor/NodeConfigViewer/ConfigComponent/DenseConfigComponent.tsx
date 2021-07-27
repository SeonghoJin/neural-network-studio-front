import { ChangeEvent, useMemo } from 'react';
import TextInput from '../../../../Input/TextInput';
import React from 'react';
import { DenseConfig, IConfigComponent } from '../../../../../core/block';


type Props = {
  config: DenseConfig,
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const DenseConfigComponent = ({config, onChange}: Props) => {

  const {units} = config;

  const configComponent: IConfigComponent<typeof config> = {
    units:  <TextInput
      propertyName={"units"}
      onChange={onChange}
      propertyContent={units}
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

export default DenseConfigComponent;
