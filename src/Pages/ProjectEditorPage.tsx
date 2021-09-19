import { applyMiddleware, createStore } from 'redux';
import reduxThunk from 'redux-thunk';
import reduxLogger from 'redux-logger';
import { Provider } from 'react-redux';
import ProjectNav from '../components/project/ProjectNav/projectNav';
import rootReducer from '../module';
import icoShare1 from '../static/img/ico_share1.png';
import icoSave1 from '../static/img/ico_save1.png';
import ProjectEditorNav from '../components/project/projectEditor/ProjectEditorNav/projectEditorNav';

const store = createStore(rootReducer, applyMiddleware(reduxThunk, reduxLogger));

export const ProjectEditorPage = () => {
	return (
		<Provider store={store}>
			<div id="container">
				<ProjectNav />
				<ProjectEditorNav />
				<section className="edit">
					<div className="sec-container">
						<div className="sec-l">
							<div className="box1">
								<div className="tit">Layer</div>
								<ol className="depth">
									<li>
										<a href="#">CONY2D</a>
									</li>
									<li>
										<a href="#">DENSE</a>
									</li>
									<li>
										<a href="#">AVERAGEPOOLING2D</a>
									</li>
									<li>
										<a href="#">MAXPOOL2D</a>
									</li>
								</ol>
							</div>

							<div className="box2">
								<div className="tit">TYPE : ACTIVATION</div>
								<div className="txt1">LABEL</div>
								<div className="txt2">Activation Node</div>
							</div>

							<div className="box3">
								<ol className="list-frm">
									<li>
										<select className="select-custom">
											<option>ACTIVATION</option>
										</select>
									</li>

									<li>
										<div className="ck-group">
											<div className="ck-area">
												<input id="ck1" type="checkbox" name="ck" className="ck-custom3" />
												<label htmlFor="ck1" />
											</div>

											<div className="ck-area">
												<input id="ck2" type="checkbox" name="ck" className="ck-custom3" checked />
												<label htmlFor="ck2" />
											</div>
										</div>
									</li>

									<li>
										<input type="text" placeholder="textform" className="inp-custom" />
									</li>

									<li>
										<input type="text" value="textform_Fill" placeholder="textform" className="inp-custom" />
									</li>
								</ol>
							</div>
						</div>

						<div className="sec-c">
							<div className="tool-group">
								<button type="button" className="btn-tool">
									<img src="../img/ico_zoom_in1.png" alt=" " />
								</button>
								<button type="button" className="btn-tool">
									<img src="../img/ico_zoom_out1.png" alt=" " />
								</button>
								<button type="button" className="btn-tool">
									<img src="../img/ico_sight1.png" alt=" " />
								</button>
								<button type="button" className="btn-tool">
									<img src="../img/ico_unlock1.png" alt=" " />
								</button>
							</div>
							<img src="../img/img_picture1.png" alt=" " />
						</div>

						<div className="sec-r">
							<div className="box1">
								<div className="top">
									<div className="txt">온라인</div>
									<div className="txt">3명</div>
								</div>

								<ol className="list-member">
									<li>
										<div className="profile-state">
											<img src="../img/img_profile1.png" alt="프로필 사진" />
											<div className="state" />
										</div>

										<div className="user-id">김나영</div>
									</li>

									<li>
										<div className="profile-state">
											<img src="../img/img_profile1.png" alt="프로필 사진" />
											<div className="state" />
										</div>

										<div className="user-id">김나영</div>
									</li>

									<li>
										<div className="profile-state">
											<img src="../img/img_profile1.png" alt="프로필 사진" />
											<div className="state" />
										</div>

										<div className="user-id">김나영</div>
									</li>
								</ol>
							</div>

							<div className="box2">
								<div className="top">
									<div className="txt">Overview</div>
								</div>

								<div className="img-area">
									<img src="../img/img_picture1.png" alt=" " />
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		</Provider>
	);
};
