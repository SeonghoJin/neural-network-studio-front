import TestNode1Component from './test/TestNode1Component';
import TestNode2Component from './test/TestNode2Component';

export enum CustomTypes {
    // eslint-disable-next-line no-unused-vars
    testNode1 = 'testNode1',
    // eslint-disable-next-line no-unused-vars
    testNode2 = 'testNode2'
}

export const nodetypes = {
  [CustomTypes.testNode1]: TestNode1Component,
  [CustomTypes.testNode2]: TestNode2Component,
};
