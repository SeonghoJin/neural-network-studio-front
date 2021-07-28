import { ChangeEvent } from 'react';
import TextInput from '../../../../Input/TextInput';
import React from 'react';
import { AveragePooling2DConfig, IConfigComponent } from '../../../../../core/block';
import NumberInput from '../../../../Input/NumberInput';
import SecondDivisionTupleInput from '../../../../Input/SecondDivisionTupleInput';
import SelectInput from '../../../../Input/SelectInput';
import { getPaddingPropertyCandidates } from './SelectCadidates';

type Props = {
  config: AveragePooling2DConfig,
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const AveragePooling2DConfigComponent = ({config, onChange}: Props) => {

  const {padding, strides, pool_size} = config

  const configComponent: IConfigComponent<typeof config> = {
    padding: <SelectInput
      propertyContent={padding}
      propertyName={'padding'}
      onChange={onChange}
      propertyCandidates={getPaddingPropertyCandidates()}
    />,
    pool_size: <NumberInput
      propertyContent={pool_size}
      propertyName={'pool_size'}
      onChange={onChange}/>,
    strides: <SecondDivisionTupleInput
      canNull={true}
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
