import React from 'react';
import PrivateAuthentication from '../components/Authentication/PrivateAuthentication';
import Navigation from '../components/nav';

export const DashBoard = () => {
	return (
		<PrivateAuthentication>
			<div className="dim-layer js-modal">
				<div className="dim-bg" />
				<div id="layer" className="modal-layer">
					<button type="button" className="modal-close js-modal-close">
						<img src="img/ico_close1.png" alt="닫기" />
					</button>
					<div className="modal-page1">
						<div className="top">
							<div className="tit">ResNetv2</div>
							<div className="txt1">by user081</div>
							<div className="txt2">
								ResNet은 마이크로소프트에서 개발한 알고리즘이다. 그것도 북경 연구소의 중국인 연구진이 개발한
								알고리즘이다.
							</div>

							<div className="ck-area">
								<input id="like_ck1" type="checkbox" name="like_ck" className="ck-custom2" />
								<label htmlFor="like_ck1">
									<div className="txt">
										<img src="img/ico_like1.png" alt="좋아요" />
										좋아요
									</div>
									<div className="num">43명</div>
								</label>
							</div>
						</div>

						<div className="content">
							<div className="img-area">
								<img src="img/img_picture1.png" alt=" " />
							</div>

							<div className="tab-group">
								<div className="tab-menu">
									<div className="click active">상세설명</div>
									<div className="click">미리보기</div>
								</div>

								<div id="tab1" className="tab-content">
									이전 연구들로 모델의 Layer가 너무 깊어질수록 오히려 성능이 떨어지는 현상이 생김을 밝혀냈다. 이는
									GRADIENt. anishing/exploding 문제 때문에 학습이 잘 이루어 지지 않기 때문이다. 그라디에디션을 많이 하기
									때문에 백프로게이션을 해도 앞으의 레이어 일수록 미분값이 작아져 그만큼 아웃풋에 영향을 끼치는 무게
									정도가 작아지는 것을 말한다. 이전 연구들로 모델의 Layer가 너무 깊어질수록 오히려 성능이 떨어지는
									현상이 생김을 밝혀냈다. 이는 GRADIENt. anishing/exploding 문제 때문에 학습이 잘 이루어 지지 않기
									때문이다. 그라디에디션을 많이 하기 때문에 백프로게이션을 해도 앞으의 레이어 일수록 미분값이 작아져
									그만큼 아웃풋에 영향을 끼치는 무게 정도가 작아지는 것을 말한다. 이전 연구들로 모델의 Layer가 너무
									깊어질수록 오히려 성능이 떨어지는 현상이 생김을 밝혀냈다. 이는 GRADIENt. anishing/exploding 문제
									때문에 학습이 잘 이루어 지지 않기 때문이다. 그라디에디션을 많이 하기 때문에 백프로게이션을 해도 앞으의
									레이어 일수록 미분값이 작아져 그만큼 아웃풋에 영향을 끼치는 무게 정도가 작아지는 것을 말한다. 이전
									연구들로 모델의 Layer가 너무 깊어질수록 오히려 성능이 떨어지는 현상이 생김을 밝혀냈다. 이는 GRADIENt.
									anishing/exploding 문제 때문에 학습이 잘 이루어 지지 않기 때문이다. 그라디에디션을 많이 하기 때문에
									백프로게이션을 해도 앞으의 레이어 일수록 미분값이 작아져 그만큼 아웃풋에 영향을 끼치는 무게 정도가
									작아지는 것을 말한다. 이전 연구들로 모델의 Layer가 너무 깊어질수록 오히려 성능이 떨어지는 현상이
									생김을 밝혀냈다. 이는 GRADIENt. anishing/exploding 문제 때문에 학습이 잘 이루어 지지 않기 때문이다.
									그라디에디션을 많이 하기 때문에 백프로게이션을 해도 앞으의 레이어 일수록 미분값이 작아져 그만큼
									아웃풋에 영향을 끼치는 무게 정도가 작아지는 것을 말한다. 이전 연구들로 모델의 Layer가 너무 깊어질수록
									오히려 성능이 떨어지는 현상이 생김을 밝혀냈다. 이는 GRADIENt. anishing/exploding 문제 때문에 학습이 잘
									이루어 지지 않기 때문이다. 그라디에디션을 많이 하기 때문에 백프로게이션을 해도 앞으의 레이어 일수록
									미분값이 작아져 그만큼 아웃풋에 영향을 끼치는 무게 정도가 작아지는 것을 말한다.
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div id="container">
				<Navigation />
				<section className="dashboard">
					<div className="wrap">
						<div className="board-util">
							<div className="search-filter">
								<button type="button" className="btn-sorting">
									<img src="img/ico_sorting1.png" alt=" " />
								</button>

								<input type="text" placeholder="검색어를 입력하세요" className="inp-search" />
							</div>

							<a href="#" className="btn-create">
								프로젝트 생성
							</a>
						</div>

						<ol className="list-project">
							<li>
								<div className="group">
									<div className="tit">NSN Project</div>
									<div className="menu">
										<button type="button" className="btn-more js-more">
											<img src="img/ico_more1.png" alt="더보기" />
										</button>
										<div className="btns-group js-more">
											<a href="#">
												<img src="img/ico_edit1.png" alt="수정" />
												수정
											</a>
											<a href="#" className="btn-delete">
												<img src="img/ico_delete1.png" alt="삭제" />
												삭제
											</a>
										</div>
									</div>

									<div className="content">
										GUI로 쉽게 딥러닝을 배울 수 있는 NSN 프로그램 개발 프로젝트 진행 중입니다.
									</div>
								</div>

								<button type="button" className="btn-bottom js-modal-open">
									프로젝트 열기
								</button>
							</li>
						</ol>
						<div className="paging">
							<a href="#" className="btn-paging">
								<img src="img/ico_arrow_prev1.png" alt="이전" />
							</a>
							<a href="#" className="active">
								1
							</a>
							<a href="#">2</a>
							<a href="#">3</a>
							<a href="#" className="btn-paging">
								<img src="img/ico_arrow_next1.png" alt="다음" />
							</a>
						</div>
					</div>
				</section>
				<footer className="footer">Copyright 2021 ⓒ Neural network studio</footer>
			</div>
		</PrivateAuthentication>
	);
};
