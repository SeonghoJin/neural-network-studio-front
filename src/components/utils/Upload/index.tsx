import { Uppy } from '@uppy/core';
import React from 'react';
import Tus from '@uppy/tus';
import { Dashboard as ReactDashBoard, useUppy } from '@uppy/react';
import '@uppy/core/dist/style.css';
import '@uppy/dashboard/dist/style.css';
import Dashboard from '@uppy/dashboard';

function Upload() {
	const uppy = useUppy(() => {
		return new Uppy().use(Dashboard).use(Tus, { endpoint: 'https://tusd.tusdemo.net/files/' });
	});

	uppy.on('complete', (result) => {
		console.log(result);
	});

	return <ReactDashBoard uppy={uppy} width="100%" />;
}

export default Upload;
