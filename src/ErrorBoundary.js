import { Component } from 'react';

export class ErrorBoundary extends Component {
	constructor(props) {
		super(props);
		this.state = {
			hasError: false
		}

	}

	componentDidCatch(error, errorInfo) {
		console.log('error', error);
		console.log('erro info', errorInfo);
		this.setState({
			hasError: true
		})
	}

	render() {
		if(this.state.hasError) {
			return <h1>An error has occured</h1>
		}

		return this.props.children;
	}
}