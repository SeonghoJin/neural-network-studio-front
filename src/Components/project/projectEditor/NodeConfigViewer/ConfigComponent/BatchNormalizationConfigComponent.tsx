import { ChangeEvent } from 'react';
import React from 'react';
import {
  BatchNormalizationConfig,
  IConfigComponent,
} from '../../../../../core/block';
import NumberInput from '../../../../Input/NumberInput';
import FloatInput from '../../../../Input/FloatInput';
import { configComponentToReactNode } from './util';

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

  return (<>
    {configComponentToReactNode(configComponent)}
  </>)
}

export default BatchNormalizationConfigComponent;
