import { BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';

import Routes from './core/routes';
import Store from './redux/store';

import './styles/style.scss';

function App() {
	return (
		<Provider store={Store}>
			<BrowserRouter>
				<Routes/>
			</BrowserRouter>
		</Provider>
	);
}

export default App;
