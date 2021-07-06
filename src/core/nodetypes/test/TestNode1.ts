import CommonNode from '../CommonNode';
import { CustomTypes } from '../index';

interface TestNode1Data{
    text : string;
}

class TestNode1 extends CommonNode {
    type = CustomTypes.testNode1

    data? : TestNode1Data

    setData(data : TestNode1Data) {
      this.data = data;
      return this;
    }
}

export default TestNode1;
