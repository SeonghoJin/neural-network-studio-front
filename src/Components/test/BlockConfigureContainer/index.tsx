import { makeStyles } from '@material-ui/core';
import {
  Edge, FlowElement, Node, useStoreState,
} from 'react-flow-renderer';
import TextInput from './ConfigureInput/TextInput';
import {
  useElementDispatch,
  useElementState,
} from '../../../core/Context/ElementProvider/ElementProvider';

const useBlockConfiguresStyle = makeStyles({
  elementHeadWrapper: {
    paddingLeft: 20,
    borderBottom: '1px solid #D9DADB',
    textTransform: 'uppercase',
  },
  elementHead: {
  },
  propertyList: {
    '& li': {
      borderBottom: '1px solid #D9DADB',
    },
  },
});

const BlockConfigures = () => {
  const classes = useBlockConfiguresStyle();
  const selectedNodes = useStoreState((store) => store.selectedElements);
  const selectedNode: Node | Edge | null = selectedNodes && selectedNodes[0];
  const elements = useElementState();
  const elementDispatch = useElementDispatch();
  const nodeId = selectedNode?.id;
  const element : null | FlowElement = elements.filter((node) => node.id === nodeId)[0];
  const data = element?.data;
  const onChange = (key : string, value : string) => {
    elementDispatch({
      type: 'renew',
      payLoad: elements?.map((node: FlowElement) => {
        if (node.id !== nodeId) {
          return node;
        }
        return {
          ...node,
          data: {
            ...data,
            [key]: value,
          },
        };
      }),
    });
  };
  const properties : any[] = [];
  // eslint-disable-next-line no-restricted-syntax
  for (const key in data) {
    if ({}.hasOwnProperty.call(data, key)) {
      properties.push(<TextInput
          key={key}
          propertyName={key}
          propertyContent={data[key]}
          onPropertyChange={onChange}
        />);
    }
  }

  if (selectedNode == null) {
    return <></>;
  }
  return (
      <div>
        <div className={classes.elementHeadWrapper}>
          <h3 className={classes.elementHead}>
            {nodeId}
          </h3>
        </div>
        <ul className={classes.propertyList}>
          <li>
            {properties}
          </li>
          <li>
            {properties}
          </li>
          <li>
            {properties}
          </li>
          <li>
            {properties}
          </li>
        </ul>
      </div>);
};

const useStyle = makeStyles({
  wrapper: {
    overflow: 'auto',
    height: '40%',
    backgroundColor: '#F7F7F7',
  },
});

const BlockConfigureContainer = () => {
  const classes = useStyle();

  return (
    <div className={classes.wrapper}>
      <BlockConfigures/>
    </div>
  );
};

export default BlockConfigureContainer;
