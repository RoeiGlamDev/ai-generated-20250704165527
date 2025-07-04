// Sentry testing page with multiple error types
import * as Sentry from '@sentry/nextjs';

const SentryExamplePage = () => {
  const throwError = () => {
    throw new Error('Test error');
  };

  const throwPromiseError = () => {
    return Promise.reject(new Error('Test promise error'));
  };

  const captureMessage = () => {
    Sentry.captureMessage('Test message');
  };

  const captureException = () => {
    Sentry.captureException(new Error('Test exception'));
  };

  return (
    <div>
      <h1>Sentry Example Page</h1>
      <button onClick={throwError}>Throw error</button>
      <button onClick={throwPromiseError}>Throw promise error</button>
      <button onClick={captureMessage}>Capture message</button>
      <button onClick={captureException}>Capture exception</button>
    </div>
  );
};

export default SentryExamplePage;