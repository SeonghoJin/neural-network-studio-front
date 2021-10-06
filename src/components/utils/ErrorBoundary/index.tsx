import React, { Component, ErrorInfo } from 'react';
import { Redirect } from 'react-router-dom';
import { QueryPath } from '../../PagePathConsts';

class ErrorBoundary extends Component<{ children: any }, { error: boolean }> {
	constructor(props: any) {
		super(props);
		this.state = {
			error: false,
		};
	}

	componentDidCatch(error: Error, info: ErrorInfo) {
		this.setState({
			error: true,
		});
	}

	render() {
		const { error } = this.state;
		const { children } = this.props;
		if (error) {
			return <Redirect to={QueryPath.DATASET_STORE_DEFAULT} />;
		}
		return children;
	}
}

export default ErrorBoundary;
