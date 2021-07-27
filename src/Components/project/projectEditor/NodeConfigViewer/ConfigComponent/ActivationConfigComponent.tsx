import { ActivationConfig, IConfigComponent } from '../../../../../core/block';
import { ChangeEvent } from 'react';
import React from 'react';
import SelectInput from '../../../../Input/SelectInput';
import Activations from '../../../../../core/Activations';

type Props = {
  config: ActivationConfig,
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const propertyCandidates = Array<string | number>();
for (const activationsKey in Activations) {
  const key = activationsKey as keyof typeof Activations
  propertyCandidates.push(Activations[key])
}

const ActivationConfigComponent = ({config, onChange}: Props) => {

  const { activation } = config

  const configComponent : IConfigComponent<typeof config> = {
    activation: (<SelectInput
      propertyName={'activation'}
      propertyCandidates={propertyCandidates}
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

