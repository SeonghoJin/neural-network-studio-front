import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import axios from 'axios';
import DropMenu from '../../utils/dropMenu/dropMenu';
import style from './card.module.css';

type Props = {
	projectNo: string;
};

const CardDropMenu = ({ projectNo }: Props) => {
	const [dropMenuToggle, setDropMenuToggle] = useState(false);
	const dropRef = useRef<HTMLDivElement | null>(null);

	const closeMenu = useCallback((e) => {
		if (!dropRef.current?.contains(e.target as Element)) {
			setDropMenuToggle(false);
		}
	}, []);

	useEffect(() => {
		document.addEventListener('mousedown', closeMenu);
		return () => {
			document.removeEventListener('mousedown', closeMenu);
		};
	}, [closeMenu]);

	const deleteProject = useCallback(async () => {
		let deleted = false;
		if (window.confirm('프로젝트를 삭제하시겠습니까?')) {
			await axios.delete(`/api/project/${projectNo}`).then((res) => {
				deleted = true;
			});
		}
		if (deleted) window.location.href = '/dashboard';
	}, [projectNo]);

	const openMenu = useCallback(() => {
		setDropMenuToggle(!dropMenuToggle);
	}, [setDropMenuToggle, dropMenuToggle]);

	return (
		<div
			onKeyDown={openMenu}
			tabIndex={0}
			role="button"
			className={`${style.ellipsisWrapper}`}
			onClick={openMenu}
			ref={dropRef}
		>
			<FontAwesomeIcon icon={faEllipsisH} />
			<DropMenu open={dropMenuToggle} custom={style.dropMenu}>
				<div className={`${style.projectMenu}`}>
					<button type="button">프로젝트 수정</button>
				</div>
				<div className={`${style.projectMenu}`}>
					<button type="button" onClick={deleteProject}>
						프로젝트 삭제
					</button>
				</div>
			</DropMenu>
		</div>
	);
};

export default CardDropMenu;
