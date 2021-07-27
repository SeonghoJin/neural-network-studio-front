import { ChangeEvent } from 'react';
import React from 'react';
import {
  FlattenConfig,
  IConfigComponent,
} from '../../../../../core/block';

type Props = {
  config: FlattenConfig,
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const FlattenConfigComponent = ({config, onChange}: Props) => {

  const configComponent: IConfigComponent<typeof config> = {
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

export default FlattenConfigComponent;
