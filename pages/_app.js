// Wrapped with ErrorBoundary and Sentry initialization
import { AppProps } from 'next/app';
import ErrorBoundary from '../components/ErrorBoundary';
import * as Sentry from '@sentry/nextjs';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary>
      <Component {...pageProps} />
    </ErrorBoundary>
  );
}

export default MyApp;