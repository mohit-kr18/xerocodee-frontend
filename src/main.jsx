import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { MantineProvider } from '@mantine/core'
import '@mantine/core/styles.css';
import { Provider } from 'react-redux'
import store from './redux/store.js'
import { GoogleOAuthProvider } from '@react-oauth/google'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<MantineProvider withGlobalStyles withNormalizeCSS>
			<Provider store={store}>
				<GoogleOAuthProvider clientId="761210670740-oirvj17js4nm56l5uhl40ojm2veadvi8.apps.googleusercontent.com">
					<App />
				</GoogleOAuthProvider>
			</Provider>
		</MantineProvider>
	</React.StrictMode>
);
