import { ChangeEvent } from 'react';
import React from 'react';
import {
  BatchNormalizationConfig,
  IConfigComponent,
} from '../../../../../core/block';
import NumberInput from '../../../../Input/NumberInput';
import FloatInput from '../../../../Input/FloatInput';

type Props = {
  config: BatchNormalizationConfig,
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const BatchNormalizationConfigComponent = ({config, onChange}: Props) => {

  const {axis, epsilon, momentum} = config

  const configComponent: IConfigComponent<typeof config> = {
    axis: <NumberInput
      propertyName={'axis'}
      propertyContent={axis}
      onChange={onChange}
    />,
    epsilon:<FloatInput
      propertyName={'epsilon'}
      propertyContent={epsilon}
      onChange={onChange}
    />,
    momentum: <FloatInput
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
