import { XYPosition } from 'react-flow-renderer';

export interface LocationProps {
	location:
		| {
				hash: string | undefined;
				pathname: string | undefined;
				search: string | undefined;
				state: string | undefined;
		  }
		| undefined;
}

export interface MatchProps<T> {
	match:
		| {
				isExact: boolean | undefined;
				params: T | undefined;
				path: string | undefined;
				url: string | undefined;
		  }
		| undefined;
}

export class Position implements XYPosition {
	x: number;

	y: number;

	constructor(x: number, y: number) {
		this.x = x;
		this.y = y;
	}
}
