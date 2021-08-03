import { ElementId, Node, XYPosition } from 'react-flow-renderer';

export default class CommonNode implements Node {
	id: ElementId;

	position: XYPosition;

	constructor(id: ElementId, position: XYPosition) {
		this.id = id;
		this.position = position;
	}
}
