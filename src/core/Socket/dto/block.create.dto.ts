import { BlockState } from '../../reactFlow/block';
import { Node } from '../entities/Node';

export class BlockCreateDto {
	blockId: string | undefined;

	block: Node<BlockState> | any | undefined;
}
