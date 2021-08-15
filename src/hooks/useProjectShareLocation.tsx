import { useParams } from 'react-router-dom';

const useProjectShareLocation = () => {
	const { roomNo, projectNo } = useParams<{
		projectNo: string;
		roomNo: string;
	}>();

	return {
		roomNo,
		projectNo,
	};
};

export default useProjectShareLocation;
