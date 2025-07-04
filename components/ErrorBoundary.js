// React error boundary component with Sentry
import * as Sentry from '@sentry/nextjs';

const ErrorBoundary = ({ children }) => {
  return (
    <Sentry.ErrorBoundary
      fallback={<div>Error: Something went wrong.</div>}
      beforeCapture={(scope) => {
        // Add some extra data to the scope
        scope.setExtra('custom', 'data');
      }}
    >
      {children}
    </Sentry.ErrorBoundary>
  );
};

export default ErrorBoundary;