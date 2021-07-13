import { FlowElement } from 'react-flow-renderer';
import LocalForage from '../config/LocalForage';

export default new class ElementStorage {
  private elementStorage;

  private static ELEMENT_STORE_KEY = 'ELEMENT_STORE_KEY';

  constructor() {
    this.elementStorage = LocalForage.createInstance({
      name: 'elementStorage',
    });
  }

  public setElements = async (elements : FlowElement[]) => {
    this.elementStorage.setItem(ElementStorage.ELEMENT_STORE_KEY, elements);
  };

  public getElements = async () : Promise<FlowElement[]> => {
    const elements = (await this.elementStorage.getItem(
      ElementStorage.ELEMENT_STORE_KEY,
    )) as FlowElement[];
    return elements;
  }
}();
