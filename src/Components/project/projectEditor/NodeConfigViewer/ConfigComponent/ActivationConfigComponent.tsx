import { ActivationConfig, IConfigComponent } from '../../../../../core/block';
import { ChangeEvent } from 'react';
import React from 'react';
import SelectInput from '../../../../Input/SelectInput';
import Activations from '../../../../../core/Activations';
import { getActivationPropertyCandidates } from './SelectCadidates';

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

  const elements = [];
  for (const maxPool2DConfigKey in configComponent) {
    const key = maxPool2DConfigKey as keyof typeof configComponent
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

export default ActivationConfigComponent;

