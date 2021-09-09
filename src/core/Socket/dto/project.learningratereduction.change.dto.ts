import { SocketEvent } from '../SocketEvent';

export class ProjectLearningRateReductionChangeDto {
	message = SocketEvent.ChangeProjectLearningRateReductionConfig;

	name: string | undefined;

	value: string | undefined;
}
