import '~/styles/globals.scss';
import {CacheProvider} from '@emotion/react';
import {EmotionCache} from '@emotion/utils';
import type {AppProps} from 'next/app';
import Head from 'next/head';
import {CssBaseline} from '~/app/presentation/components/mui';
import createEmotionCache from '~/config/create-emotion-cache';

const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
    emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
    const {Component, emotionCache = clientSideEmotionCache, pageProps} = props;
    return (
        <CacheProvider value={emotionCache}>
            <Head>
                <meta name='viewport' content='initial-scale=1, width=device-width'/>
                <title>lunare</title>
            </Head>
            <CssBaseline/>
            <Component {...pageProps} />
        </CacheProvider>
    );
}
