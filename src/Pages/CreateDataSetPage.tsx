import React, { useCallback, useRef, useState } from 'react';
import styled from 'styled-components';
import { Button, Divider } from '@material-ui/core';
import { useSnackbar } from 'notistack';
import { useHistory } from 'react-router-dom';
import PrivateAuthentication from '../components/Authentication/PrivateAuthentication';
import Navigation from '../components/nav';
import { CustomCheckInput } from '../components/Input/custom/CustomCheckInput';
import { UpdateDataset } from '../API/Dataset/type';
import { useUploadFileAndUpdateDataset } from '../hooks/useUploadFileAndUpdateDataset';
import { QueryPath } from '../components/PagePathConsts';
import SimpleBackdrop from '../components/utils/BackLoading';

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
	margin-right: 20px;
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

const MAX_FILE_SIZE = 500 * 1024 * 1024;

export const CreateDataSetPage = () => {
	const fileRef = useRef<HTMLInputElement | null>(null);
	const [updateDatasetState, setUpdateDatasetState] = useState<Omit<UpdateDataset, 'id'>>({
		public: true,
		description: '',
		name: '',
	});
	const history = useHistory();
	const { fetch, loading } = useUploadFileAndUpdateDataset();
	const [uploadFile, setUploadFile] = useState<File | null>(null);
	const [filePath, setFilePath] = useState<string>('');
	const { enqueueSnackbar } = useSnackbar();

	const onChange = useCallback(
		(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
			const { name, value } = e.target;
			setUpdateDatasetState((prev) => ({
				...prev,
				[name]: value,
			}));
		},
		[setUpdateDatasetState]
	);

	const onChangeFile = useCallback(async () => {
		const inputNode = fileRef.current as HTMLInputElement;
		const file = (inputNode.files && inputNode.files[0]) || null;
		if (!file) {
			return;
		}

		if (file.size > MAX_FILE_SIZE) {
			enqueueSnackbar('파일의 용량이 너무 큽니다.', { variant: 'error' });
			return;
		}
		setFilePath(inputNode.value);
		setUploadFile(file);
	}, [enqueueSnackbar]);

	const onSubmit = useCallback(() => {
		const uploadFormData = new FormData();
		if (uploadFile == null) {
			enqueueSnackbar('업로드할 파일이 없습니다.', { variant: 'error' });
			return;
		}
		if (updateDatasetState.name === '') {
			enqueueSnackbar('데이터셋의 이름이 없습니다.', { variant: 'error' });
			return;
		}
		uploadFormData.append('dataset', uploadFile);
		fetch(uploadFormData, updateDatasetState)
			.then(() => {
				history.push(QueryPath.DATASET_STORE_DEFAULT);
				enqueueSnackbar('데이터 셋이 저장되었습니다.', { variant: 'success' });
			})
			.catch((e) => {
				enqueueSnackbar(e.message, { variant: 'error' });
			});
	}, [enqueueSnackbar, fetch, history, updateDatasetState, uploadFile]);

	return (
		<PrivateAuthentication>
			<Navigation currentMenu={3} />
			{loading && <SimpleBackdrop open />}
			<MainWrapper>
				<Wrapper>
					<CreateProjectContainer>
						<h3>데이터 셋 생성하기</h3>
					</CreateProjectContainer>
					<Container>
						<ItemWrapper>
							<ItemHead>
								데이터 셋 파일
								<div
									style={{
										color: 'gray',
										fontSize: '8',
									}}
								>
									.csv, .jpg or .png인 .zip파일만 최대 500MB까지 업로드 하실 수 있습니다.
								</div>
							</ItemHead>
							<ItemBody>
								<FileInputWrapper>
									<FilePathWrapper>{filePath}</FilePathWrapper>
									<FileInputLabel htmlFor="uploadImage">파일 찾기</FileInputLabel>
									<input ref={fileRef} type="file" id="uploadImage" accept=".csv,.zip" onChange={onChangeFile} hidden />
								</FileInputWrapper>
							</ItemBody>
						</ItemWrapper>
						<MarginDivider />
						<ItemWrapper>
							<ItemHead>공개 여부</ItemHead>
							<ItemBody>
								<CheckInputWrapper>
									<CustomCheckInput
										title="공개 여부"
										name="public"
										onChange={onChange}
										value={updateDatasetState.public}
									/>
								</CheckInputWrapper>
							</ItemBody>
						</ItemWrapper>
						<MarginDivider />
						<ItemWrapper>
							<ItemHead>데이터 셋 이름</ItemHead>
							<ItemBody>
								<NameInput name="name" onChange={onChange} />
							</ItemBody>
						</ItemWrapper>
						<MarginDivider />
						<ItemWrapper>
							<ItemHead>데이터 셋 설명</ItemHead>
							<ItemBody>
								<DescriptionWrapper>
									<Description
										placeholder=""
										name="description"
										value={updateDatasetState.description}
										onChange={onChange}
									/>
								</DescriptionWrapper>
							</ItemBody>
						</ItemWrapper>
					</Container>
					<ButtonGroup>
						<Button variant="contained" type="button" color="primary" onClick={onSubmit}>
							데이터셋 생성
						</Button>
					</ButtonGroup>
				</Wrapper>
			</MainWrapper>
		</PrivateAuthentication>
	);
};
