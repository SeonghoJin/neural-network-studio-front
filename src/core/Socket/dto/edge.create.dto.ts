import { Edge, Elements } from 'react-flow-nns';
import { SocketEvent } from '../SocketEvent';

export class EdgeCreateDto {
	elements: Elements | undefined;

	message = SocketEvent.CreateEdge;
}
