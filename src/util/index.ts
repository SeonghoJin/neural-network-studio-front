import { v4 as uuidv4 } from 'uuid';

export const getId = () => {
  const id = `${uuidv4() + Date.now()}`;
  return id;
};

export const getNodeId = () => {
  const id = `node ${uuidv4() + Date.now()}`;
  return id;
};
