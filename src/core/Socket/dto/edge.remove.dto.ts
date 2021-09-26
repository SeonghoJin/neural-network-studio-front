import { SocketEvent } from '../SocketEvent';

export class EdgeRemoveDto {
	edgeId: string | undefined;

	message = SocketEvent.RemoveEdge;
}
