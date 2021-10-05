import React, { useCallback, useRef } from 'react';
import styled from 'styled-components';
import {
	Button,
	Divider,
	FormControl,
	FormControlLabel,
	FormLabel,
	Radio,
	RadioGroup,
	TextField,
} from '@material-ui/core';
import { ReflexSplitter } from 'react-reflex';
import PrivateAuthentication from '../components/Authentication/PrivateAuthentication';
import Main from '../components/dashboard/newProject/main/NewProjectMain';
import Navigation from '../components/nav';
import { CustomCheckInput } from '../components/Input/custom/CustomCheckInput';

const MainWrapper = styled.div`
	width: 100%;
	height: 100%;
	background-color: #f6f6f6;
`;

const Wrapper = styled.div`
	box-sizing: border-box;
	height: 100%;
	width: 60%;
	max-width: 1440px;
	margin: auto;
	padding: 50px;
`;

const Container = styled.div`
	box-sizing: border-box;
	width: 100%;
	display: flex;
	flex-direction: column;
	background-color: white;
	border: 1px solid #f0f0f5;
	border-radius: 10px;
	padding: 20px;
`;

const CreateProjectContainer = styled.div`
	box-sizing: border-box;
	height: 60px;
	font-size: 30px;
`;

const DescriptionWrapper = styled.div`
	box-sizing: border-box;
	width: 100%;
	height: 100%;
`;

const Description = styled.textarea`
	box-sizing: border-box;
	height: 100px;
	width: 100%;
	background-color: #e9e9e9;
	resize: none;
	font-size: 17px;
	font-weight: 400;
	color: black;
	padding: 15px;
	border: 0px;
	border-radius: 10px;
	outline: none;
`;

const ButtonGroup = styled.div`
	padding-top: 20px;
	display: flex;
	justify-content: flex-end;
`;

const CheckInputWrapper = styled.div`
	margin-top: 10px;
`;

const FileInputWrapper = styled.div`
	display: flex;
	flex-direction: row;
`;

const FileInputLabel = styled.label`
	font-size: 16px;
	font-weight: 400;
	color: #585858;
	cursor: pointer;
	padding-left: 10px;
	text-align: center;
`;

const FilePathWrapper = styled.div`
	box-sizing: border-box;
	background-color: #e9e9e9;
	width: 100%;
	resize: none;
	font-size: 17px;
	font-weight: 400;
	padding: 20px;
	color: black;
	border: 0px;
	border-radius: 10px;
	outline: none;
	flex: 1;
`;

const ItemWrapper = styled.div`
	width: 100%;
	display: flex;
`;

const ItemHead = styled.div`
	width: 200px;
`;

const ItemBody = styled.div`
	width: 100%;
`;

const NameInput = styled.input`
	box-sizing: border-box;
	width: 100%;
	background-color: #e9e9e9;
	font-size: 17px;
	font-weight: 400;
	color: black;
	border: 0px;
	padding: 20px;
	border-radius: 10px;
	outline: none;
`;

const MarginDivider = () => {
	return (
		<Divider
			style={{
				marginTop: 20,
				marginBottom: 20,
			}}
		/>
	);
};

export const CreateDataSetPage = () => {
	const fileRef = useRef<HTMLInputElement | null>(null);

	const onChangeFile = useCallback(() => {
		const inputNode = fileRef.current as HTMLInputElement;
		const file = (inputNode.files && inputNode.files[0]) || null;
		console.log(file?.name);
	}, []);

	return (
		<PrivateAuthentication>
			<Navigation />
			<MainWrapper>
				<Wrapper>
					<CreateProjectContainer>
						<h3>데이터 셋 생성하기</h3>
					</CreateProjectContainer>
					<Container>
						<ItemWrapper>
							<ItemHead>데이터 셋 파일</ItemHead>
							<ItemBody>
								<FileInputWrapper>
									<FilePathWrapper />
									<FileInputLabel htmlFor="uploadImage">파일 찾기</FileInputLabel>
									<input ref={fileRef} type="file" id="uploadImage" accept={'image/*'} onChange={onChangeFile} hidden />
								</FileInputWrapper>
							</ItemBody>
						</ItemWrapper>
						<MarginDivider />
						<ItemWrapper>
							<ItemHead>공개 여부</ItemHead>
							<ItemBody>
								<CheckInputWrapper>
									<CustomCheckInput title="공개 여부" name="public" onChange={() => {}} value />
								</CheckInputWrapper>
							</ItemBody>
						</ItemWrapper>
						<MarginDivider />
						<ItemWrapper>
							<ItemHead>데이터 셋 이름</ItemHead>
							<ItemBody>
								<NameInput name="name" />
							</ItemBody>
						</ItemWrapper>
						<MarginDivider />
						<ItemWrapper>
							<ItemHead>데이터 셋 설명</ItemHead>
							<ItemBody>
								<DescriptionWrapper>
									<Description placeholder="" name="description" />
								</DescriptionWrapper>
							</ItemBody>
						</ItemWrapper>
					</Container>
					<ButtonGroup>
						<Button variant="contained" type="button" color="primary">
							데이터셋 생성
						</Button>
					</ButtonGroup>
				</Wrapper>
			</MainWrapper>
		</PrivateAuthentication>
	);
};
