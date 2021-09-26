import { User } from './User';
import { XYPosition } from './types';

export class Cursor {
	user: User | undefined;

	position: XYPosition | undefined;
}
