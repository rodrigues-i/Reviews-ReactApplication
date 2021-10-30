import ReactDOM from 'react-dom';
import Application from './Application';
import { ErrorBoundary } from './ErrorBoundary';

const main = (
	<ErrorBoundary>
		<Application />
	</ErrorBoundary>
	);

ReactDOM.render(main, document.getElementById('root'));