import { ActivationConfig, IConfigComponent, MaxPool2DConfig } from '../../../../../core/block';
import { ChangeEvent, createElement, FunctionComponent, ReactNode, useMemo } from 'react';
import TextInput from '../../../../Input/TextInput';
import React from 'react';
import SelectInput from '../../../../Input/SelectInput';
import Activations from '../../../../../core/Activations';

interface Props {
  config: ActivationConfig,
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const ActivationConfigComponent = (props: Props) => {

  const { config, onChange } = props
  const { activation } = config

  type configType = typeof config;

  const propertyCandidates = [];
  for (const activationsKey in Activations) {
    propertyCandidates.push(activationsKey)
  }

  const configComponent : IConfigComponent<configType> = {
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

