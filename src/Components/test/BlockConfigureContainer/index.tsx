import { makeStyles } from '@material-ui/core';
import {
  Edge, FlowElement, Node, useStoreState,
} from 'react-flow-renderer';
import TextInput from './ConfigureInput/TextInput';
import {
  useElementDispatch,
  useElementState,
} from '../../../core/Context/ElementProvider/ElementProvider';
import ElementsStorage from '../../../Storage/ElementsStorage';

const useBlockConfiguresStyle = makeStyles({
  wrapper: {
    width: '100%',
    height: '100%',
  },
  elementHeadWrapper: {
    width: '100%',
    paddingLeft: 20,
    borderBottom: '1px solid #D9DADB',
    textTransform: 'uppercase',
  },
  elementHead: {
    maxWidth: '400',
    textOverflow: 'hidden',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
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
    const newElement = elements?.map((node: FlowElement) => {
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
    });
    elementDispatch({
      type: 'renew',
      payLoad: newElement,
    });
    ElementsStorage.setElements(newElement);
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
      <div className={classes.wrapper}>
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
    width: 280,
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
