import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { RecoilRoot } from 'recoil';
import reportWebVitals from './reportWebVitals';
import App from './App';
import { SocketProvider } from './core/Socket/Context/SocketContext';

ReactDOM.render(
	<RecoilRoot>
		<App />
	</RecoilRoot>,
	document.getElementById('root')
);

reportWebVitals();
