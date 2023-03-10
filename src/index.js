import React, { forwardRef } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import * as serviceWorker from './serviceWorker';

import { Provider as ReduxProvider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import customReducer from './reducers/reducer';
import { Link as RouterLink, createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './routes/root';
import ErrorPage from './routes/errorPage';
import Home from './routes/home';
import Page from './routes/page';
import { createTheme, StyledEngineProvider, ThemeProvider } from '@mui/material';
/**
 * React Router
 */
const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: '',
				element: <Home />,
			},
			{
				path: 'page1',
				element: <Page />,
			},
		],
	},
]);

/**
 * MUI Theme
 */
const LinkBehaviour = forwardRef(function LinkBehaviour(props, ref) {
	const { href, ...other } = props;
	return <RouterLink ref={ref} to={href} {...other} />;
});

const theme = createTheme({
	palette: {
		mode: 'light',
		primary: {
			main: '#3b82f6',
		},
		secondary: {
			main: '#ec4899',
		},
		background: {
			default: '#f4f4f5',
		},
	},
	components: {
		MuiLink: {
			defaultProps: {
				component: LinkBehaviour,
			},
		},
		MuiButtonBase: {
			defaultProps: {
				LinkComponent: LinkBehaviour,
			},
		},
	},
});

const reduxStore = configureStore({
	reducer: {
		custom: customReducer,
	},
});

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
	<ReduxProvider store={reduxStore}>
		<StyledEngineProvider injectFirst>
			<ThemeProvider theme={theme}>
				<RouterProvider router={router} />
			</ThemeProvider>
		</StyledEngineProvider>
	</ReduxProvider>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
