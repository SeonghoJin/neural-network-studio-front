import styled from 'styled-components';
import AssetMain from '../components/asset/AssetMain';
import PrivateAuthentication from '../Authentication/PrivateAuthentication';
import Navigation from '../components/nav';

const Wrapper = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	flex-direction: column;
`;

const AssetMainWrapper = styled.div`
	flex-grow: 1;
`;

const Asset = () => {
	return (
		<PrivateAuthentication>
			<Wrapper>
				<Navigation />
				<AssetMainWrapper>
					<AssetMain />
				</AssetMainWrapper>
			</Wrapper>
		</PrivateAuthentication>
	);
};

export default Asset;
