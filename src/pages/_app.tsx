// Imported from https://github.com/mui/material-ui/blob/5b0d0c343c9b195e7328cc20461c9adc1f5ac02d/examples/nextjs-with-typescript/pages/_app.tsx
import "../../styles/globals.css";
import { CacheProvider, EmotionCache } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { Provider } from "jotai";
import { AppProps } from "next/app";
import Head from "next/head";
import { appWithTranslation } from "next-i18next";
import React from "react";

import ColorFiltersDefinition from "src/simulators/initilizations/ColorFiltersDefinition";
import createEmotionCache from "src/theming/createEmotionCache";
import theme from "src/theming/theme";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <Provider>
      <CacheProvider value={emotionCache}>
        <Head>
          <title>a11yinyerface</title>
          <meta
            name="description"
            content="A worst-practice accessibility experiment"
          />
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Component {...pageProps} />
          <ColorFiltersDefinition />
        </ThemeProvider>
      </CacheProvider>
    </Provider>
  );
}

export default appWithTranslation(MyApp);

export interface StaticProps {
  locale: string;
}
