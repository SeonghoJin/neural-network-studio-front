import { IConfigComponent, MaxPool2DConfig } from '../../../../../core/block';
import { ChangeEvent, useMemo } from 'react';
import TextInput from '../../../../Input/TextInput';
import React from 'react';


type Props = {
  config: MaxPool2DConfig,
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const MaxPool2DConfigComponent = ({config, onChange}: Props) => {

  const { pool_size, strides, padding } = config;

  const configComponent: IConfigComponent<typeof config> = useMemo(() =>({
    padding: (<TextInput
      onChange={onChange}
      propertyContent={padding}
      propertyName={'padding'}
    />),
    pool_size: (<TextInput
      propertyName={'pool_size'}
      onChange={onChange}
      propertyContent={pool_size}
    />),
    strides: (<TextInput
      propertyName={'strides'}
      onChange={onChange}
      propertyContent={strides}/>
    )
  }), [config, onChange])

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

export default MaxPool2DConfigComponent;
