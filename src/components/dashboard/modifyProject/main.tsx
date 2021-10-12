import React, { ChangeEvent, useCallback, useState } from 'react';
import styled from 'styled-components';
import { Button, TextField } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { IProjectDto } from '../../../API/project/types';

const maxNameLen = 45;
const maxDescriptionLen = 2000;

const Wrapper = styled.div`
	box-sizing: border-box;
	height: 100%;
	width: 768px;
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
	padding-bottom: 20px;
	font-size: 30px;
`;

const DescriptionWrapper = styled.div`
	box-sizing: border-box;
	width: 100%;
	height: 100%;
	padding-top: 20px;
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

const ModifyProjectMain = ({ project, updateProject }: { project: IProjectDto; updateProject: any }) => {
	const [inputs, setInputs] = useState({
		name: project.name,
		description: project.description,
	});

	const onchange = useCallback(
		(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
			const { name, value } = e.target;
			if (name === 'name') {
				if (value.length > maxNameLen) return;
			}
			if (name === 'description') {
				if (value.length > maxDescriptionLen) return;
			}
			setInputs({
				...inputs,
				[name]: value,
			});
		},
		[inputs]
	);

	return (
		<Wrapper>
			<CreateProjectContainer>
				<h3>프로젝트 수정하기</h3>
			</CreateProjectContainer>
			<Container>
				<TextField
					label="이름"
					name="name"
					placeholder="프로젝트 이름 (최대 45자)"
					onChange={onchange}
					value={inputs.name}
				/>
				<DescriptionWrapper>
					<Description
						placeholder="프로젝트 설명 (최대 2000자)"
						name="description"
						onChange={onchange}
						value={inputs.description}
						maxLength={maxDescriptionLen}
					/>
				</DescriptionWrapper>
				<div />
			</Container>
			<ButtonGroup>
				<Button
					variant="contained"
					type="button"
					onClick={async () => {
						await updateProject(project.projectNo, {
							...inputs,
						});
					}}
					color="primary"
				>
					프로젝트 수정
				</Button>
			</ButtonGroup>
		</Wrapper>
	);
};

export default ModifyProjectMain;
