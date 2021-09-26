import React from 'react';
import { Link } from 'react-router-dom';
import { StaticPath } from '../../PagePathConsts';

const LandingMain = () => {
	return (
		<div className="pos">
			<div className="top">
				<div className="tit">
					<strong>GUI로 쉽게 하는</strong> 딥러닝 통합 개발환경
				</div>
				<Link className="btn-link" to={`${StaticPath.DASHBOARD_PROJECTS}`} type="button">
					Get Start
				</Link>
			</div>

			<ol className="info">
				<li>
					<div className="content">
						<div className="txt">
							<strong>코드 작성 없이</strong>
							<br />
							그래프로 모델 구성
						</div>
					</div>
				</li>

				<li>
					<div className="content">
						<div className="txt">
							작성한 그래프를
							<br />
							<strong>코드로 변환</strong>
						</div>
					</div>
				</li>

				<li>
					<div className="content">
						<div className="txt">
							클라우드 환경에서
							<br />
							학습 및 시각화
						</div>
					</div>
				</li>

				<li>
					<div className="content">
						<div className="txt">
							<strong>Co Browsing</strong>을 통해
							<br />
							동시 수정
						</div>
					</div>
				</li>
			</ol>
		</div>
	);
};

export default LandingMain;
