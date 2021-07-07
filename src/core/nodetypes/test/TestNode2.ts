import { MouseEventHandler } from 'react';
import CommonNode from '../CommonNode';
import { CustomTypes } from '../index';

interface TestNode2Data{
    text : string;
    onClick? : MouseEventHandler;
}

class TestNode2 extends CommonNode {
    type = CustomTypes.testNode2

    data? : TestNode2Data

    setData(data : TestNode2Data) {
      this.data = data;
      return this;
    }
}

export default TestNode2;
