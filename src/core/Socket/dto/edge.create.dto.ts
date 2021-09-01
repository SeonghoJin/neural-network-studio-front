import { Edge } from 'react-flow-nns';
import { SocketEvent } from '../SocketEvent';

export class EdgeCreateDto {
	edgeId: string | undefined;

	edge: Edge | any | undefined;

	message = SocketEvent.CreateEdge;
}
