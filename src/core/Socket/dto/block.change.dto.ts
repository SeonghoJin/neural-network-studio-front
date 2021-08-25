import { BlockState } from '../../reactFlow/block';

export class BlockChangeDto {
	blockId: string | undefined;

	blockState: BlockState | any | undefined;
}
