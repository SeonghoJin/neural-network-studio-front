import React, { Component, ErrorInfo } from 'react';

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
			return <h1>에러 발생!</h1>;
		}
		return children;
	}
}

export default ErrorBoundary;
