import TestNode1Component from './test/TestNode1Component';

export enum CustomTypes {
    // eslint-disable-next-line no-unused-vars
    testNode1 = 'testNode1'
}

export const nodetypes = {
  [CustomTypes.testNode1]: TestNode1Component,
};
