// Imported from https://github.com/mui/material-ui/blob/5b0d0c343c9b195e7328cc20461c9adc1f5ac02d/examples/nextjs-with-typescript/pages/_app.tsx
import '../styles/globals.css';
import React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';
import theme from 'src/theming/theme';
import createEmotionCache from 'src/theming/createEmotionCache';
import ColorFiltersDefinition from 'src/simulators/initilizations/ColorFiltersDefinition';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
	emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
	const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
	return (
		<CacheProvider value={emotionCache}>
			<Head>
				<title>a11yinyerface</title>
				<meta
					name='description'
					content='A worst-practice accessibility experiment'
				/>
				<meta name='viewport' content='initial-scale=1, width=device-width' />
			</Head>
			<ThemeProvider theme={theme}>
				{/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
				<CssBaseline />
				<Component {...pageProps} />
				<ColorFiltersDefinition />
			</ThemeProvider>
		</CacheProvider>
	);
}
