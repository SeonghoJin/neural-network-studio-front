import React, { ChangeEvent, useCallback, useState } from 'react';
import style from './NewProjectMain.module.css';
import utils from '../../../utils/index.module.css';
import useCreateProject from '../../../../hooks/useCreateProject';

const maxNameLen = 45;
const maxDescriptionLen = 2000;

const NewProjectMain = () => {
	const [inputs, setInputs] = useState({
		name: '',
		description: '',
	});

	const { fetch, errorFeedback, successFeedback, loadingFeedback } = useCreateProject();

	const onchange = useCallback(
		(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
			const { name, value } = e.target;

			setInputs({
				...inputs,
				[name]: value,
			});
		},
		[inputs]
	);

	return (
		<div className={`${style.main}`}>
			{errorFeedback}
			{successFeedback}
			{loadingFeedback}
			<div className={`${style.projectInfo}`}>
				<div className={`${utils.inputWrapper}`} style={{ width: '100%', marginBottom: '20px' }}>
					<input
						name="name"
						className={`${style.name}`}
						placeholder="프로젝트 이름 (최대 45자)"
						onChange={onchange}
						maxLength={maxNameLen}
					/>
				</div>
				<div className={`${utils.inputWrapper}`} style={{ width: '100%' }}>
					<textarea
						className={`${style.description}`}
						placeholder="프로젝트 설명 (최대 2000자)"
						name="description"
						onChange={onchange}
						maxLength={maxDescriptionLen}
					/>
				</div>
			</div>
			<div className={`${style.footer}`}>
				<button type="button" className={`${style.createButton}`} onClick={() => fetch(inputs)}>
					프로젝트 생성
				</button>
			</div>
		</div>
	);
};

export default NewProjectMain;
