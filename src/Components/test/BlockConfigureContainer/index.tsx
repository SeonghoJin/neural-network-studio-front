import { makeStyles } from '@material-ui/core';
import BlockList from '../BlockList';
import TextInput from './ConfigureInput/TextInput';

const useStyle = makeStyles({
  wrapper: {
    padding: 3,
    flexGrow: 1,
    backgroundColor: '#F7F7F7',
  },
});

const BlockConfigures = () => (
    <div>
      <ul>
        <BlockList
          elementNumber={1}
          name="test"
        >
          <TextInput/>
        </BlockList>
        <BlockList
          elementNumber={1}
          name="test"
        >
          <TextInput/>
        </BlockList>
      </ul>
  </div>
);

const BlockConfigureContainer = () => {
  const classes = useStyle();

  return (
    <div className={classes.wrapper}>
      <BlockConfigures/>
    </div>
  );
};

export default BlockConfigureContainer;
