import { ActivationConfig, IConfigComponent } from '../../../../../core/block';
import { ChangeEvent } from 'react';
import React from 'react';
import SelectInput from '../../../../Input/SelectInput';
import { getActivationPropertyCandidates } from './SelectCadidates';
import { configComponentToReactNode } from './util';

type Props = {
  config: ActivationConfig,
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const ActivationConfigComponent = ({config, onChange}: Props) => {

  const { activation } = config

  const configComponent : IConfigComponent<typeof config> = {
    activation: (<SelectInput
      propertyName={'activation'}
      propertyCandidates={getActivationPropertyCandidates()}
      onChange={onChange}
      propertyContent={activation}
    />)
  }

  return (<>
    {configComponentToReactNode(configComponent)}
  </>)
}

export default ActivationConfigComponent;

