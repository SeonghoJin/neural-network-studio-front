import { Edge, Elements } from 'react-flow-nns';
import { SocketEvent } from '../SocketEvent';

export class EdgeUpdateDto {
	elements: Elements | undefined;

	message = SocketEvent.UpdateEdge;
}
