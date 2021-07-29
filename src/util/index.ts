import { v4 as uuidv4 } from 'uuid';
import {deprecated} from 'typesafe-actions';

export const getId = () => {
  const id = `${uuidv4()}`;
  return id.replaceAll('-','');
};

export const getNodeId = () => {
  const id = `node_${getId()}`;
  return id;
};

export const createStandardAction = deprecated.createStandardAction;
