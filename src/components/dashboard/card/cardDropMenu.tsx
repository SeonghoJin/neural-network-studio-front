import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Backdrop } from '@material-ui/core';
import DropMenu from '../../utils/dropMenu/dropMenu';
import style from './card.module.css';
import useDeleteProject from '../../../hooks/useDeleteProject';
import StandardModal from '../../utils/modal/StandardModal';

type Props = {
	projectNo: number;
};

const CardDropMenu = ({ projectNo }: Props) => {
	const [dropMenuToggle, setDropMenuToggle] = useState(false);
	const dropRef = useRef<HTMLDivElement | null>(null);
	const { fetch } = useDeleteProject();
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

	const onDeleteProject = useCallback(async () => {
		if (window.confirm('프로젝트를 삭제하시겠습니까?')) {
			fetch(projectNo.toString());
		}
	}, [fetch, projectNo]);

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
					<button type="button" onClick={onDeleteProject}>
						프로젝트 삭제
					</button>
				</div>
			</DropMenu>
		</div>
	);
};

export default CardDropMenu;
