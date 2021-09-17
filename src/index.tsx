import React from 'react';
import ReactDOM from 'react-dom';
import { RecoilRoot } from 'recoil';
import reportWebVitals from './reportWebVitals';
import App from './App';

ReactDOM.render(
	<RecoilRoot>
		<App />
	</RecoilRoot>,
	document.getElementById('root')
);

reportWebVitals();
