import React from 'react';
import { Link } from 'react-router-dom';
import { CardGiftcard } from '@material-ui/icons';
import PrivateAuthentication from '../components/Authentication/PrivateAuthentication';
import Navigation from '../components/nav';
import { StaticPath } from '../components/PagePathConsts';
import icoSorting1 from '../static/img/ico_sorting1.png';
import icoMore1 from '../static/img/ico_more1.png';
import iconEdit1 from '../static/img/ico_edit1.png';
import iconDelete1 from '../static/img/ico_delete1.png';
import CardGrid from '../components/dashboard/cardGrid/cardGrid';

export const DashBoard = () => {
	return (
		<PrivateAuthentication>
			<div id="container">
				<Navigation />
				<section className="dashboard">
					<div className="wrap">
						<div className="board-util">
							<div className="search-filter">
								<button type="button" className="btn-sorting">
									<img src={icoSorting1} alt=" " />
								</button>

								<input type="text" placeholder="검색어를 입력하세요" className="inp-search" />
							</div>

							<Link to={`${StaticPath.DASHBOARD_NEW_PROJECT}`} className="btn-create">
								프로젝트 생성
							</Link>
						</div>

						<ol className="list-project">
							<CardGrid />
							{/*	<li> */}
							{/*		<div className="group"> */}
							{/*			<div className="tit">NSN Project</div> */}
							{/*			<div className="menu"> */}
							{/*				<button type="button" className="btn-more js-more"> */}
							{/*					<img src={icoMore1} alt="더보기" /> */}
							{/*				</button> */}
							{/*				<div className="btns-group js-more"> */}
							{/*					<a href="#"> */}
							{/*						<img src={iconEdit1} alt="수정" /> */}
							{/*						수정 */}
							{/*					</a> */}
							{/*					<a href="#" className="btn-delete"> */}
							{/*						<img src={iconDelete1} alt="삭제" /> */}
							{/*						삭제 */}
							{/*					</a> */}
							{/*				</div> */}
							{/*			</div> */}

							{/*			<div className="content"> */}
							{/*				GUI로 쉽게 딥러닝을 배울 수 있는 NSN 프로그램 개발 프로젝트 진행 중입니다. */}
							{/*			</div> */}
							{/*		</div> */}

							{/*		<button type="button" className="btn-bottom js-modal-open"> */}
							{/*			프로젝트 열기 */}
							{/*		</button> */}
							{/*	</li> */}
						</ol>
						{/* <div className="paging"> */}
						{/*	<a href="#" className="btn-paging"> */}
						{/*		<img src="img/ico_arrow_prev1.png" alt="이전" /> */}
						{/*	</a> */}
						{/*	<a href="#" className="active"> */}
						{/*		1 */}
						{/*	</a> */}
						{/*	<a href="#">2</a> */}
						{/*	<a href="#">3</a> */}
						{/*	<a href="#" className="btn-paging"> */}
						{/*		<img src="img/ico_arrow_next1.png" alt="다음" /> */}
						{/*	</a> */}
						{/* </div> */}
					</div>
				</section>
				<footer className="footer">Copyright 2021 ⓒ Neural network studio</footer>
			</div>
		</PrivateAuthentication>
	);
};
