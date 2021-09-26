import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import DropMenu from '../../../utils/dropMenu/dropMenu';
import style from './card.module.css';
import useDeleteProject from '../../../../hooks/useDeleteProject';
import icoMore1 from '../../../../static/img/ico_more1.png';
import iconEdit1 from '../../../../static/img/ico_edit1.png';
import iconDelete1 from '../../../../static/img/ico_delete1.png';

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
		<div className="menu" ref={dropRef}>
			<button type="button" className="btn-more js-more" onClick={openMenu}>
				<img src={icoMore1} alt="더보기" />
			</button>
			<DropMenu open={dropMenuToggle}>
				<a href="#">
					<img src={iconEdit1} alt="수정" />
					수정
				</a>
				<button
					type="button"
					onClick={onDeleteProject}
					style={{
						width: '100%',
					}}
				>
					<img src={iconDelete1} alt="삭제" />
					삭제
				</button>
			</DropMenu>
		</div>
	);
};

export default CardDropMenu;
