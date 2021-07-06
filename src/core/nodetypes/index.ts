import TestNode1Component from './test/TestNode1Component';

export const customTypes = {
  testNode1: 'testNode1',
};

export const nodetypes = {
  [customTypes.testNode1]: TestNode1Component,
};
