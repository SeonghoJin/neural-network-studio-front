import { IConfigComponent, MaxPool2DConfig } from '../../../../../core/block';
import { ChangeEvent, createElement, FunctionComponent, ReactNode, useMemo } from 'react';
import TextInput from '../../../../Input/TextInput';
import React from 'react';


interface Props {
  config: MaxPool2DConfig,
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const MaxPool2DConfigComponent = (props: Props) => {

  const { config, onChange } = props
  const { pool_size, strides, padding } = config;

  const maxPool2DConfig : IConfigComponent<typeof config> = useMemo(() =>({
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
  }), [props])

  const elements = [];
  for (const maxPool2DConfigKey in maxPool2DConfig) {
    const key = maxPool2DConfigKey as keyof typeof maxPool2DConfig
    elements.push(
      <li key={key}>
        {maxPool2DConfig[key]}
      </li>
    );
  };

  return (<>
    {elements}
  </>)
}

export default MaxPool2DConfigComponent;
