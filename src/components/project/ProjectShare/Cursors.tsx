import { useRecoilState } from 'recoil';
import { cursorResponseResultState } from '../../../hooks/useSocket';

type Props = {
	ownerName: string;
};

const Cursors = ({ ownerName }: Props) => {
	const [cursorResponseResult] = useRecoilState(cursorResponseResultState);
	console.log(cursorResponseResult);
	return <></>;
};

export default Cursors;
