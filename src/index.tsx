import React from 'react';
import ReactDOM from 'react-dom';
import { RecoilRoot } from 'recoil';
import { SnackbarProvider } from 'notistack';
import reportWebVitals from './reportWebVitals';
import App from './App';

ReactDOM.render(
	<RecoilRoot>
		<SnackbarProvider maxSnack={1}>
			<App />
		</SnackbarProvider>
	</RecoilRoot>,
	document.getElementById('root')
);

reportWebVitals();
