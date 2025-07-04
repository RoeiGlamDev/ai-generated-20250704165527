// Custom error page with Sentry integration
import * as Sentry from '@sentry/nextjs';

const CustomErrorPage = ({ statusCode }) => {
  return (
    <div>
      <h1>Error {statusCode}</h1>
      <button onClick={() => Sentry.captureException(new Error('Test error'))}>
        Capture test error
      </button>
    </div>
  );
};

export default CustomErrorPage;