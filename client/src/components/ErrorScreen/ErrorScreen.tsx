import './errorScreen.css';

interface Props {
  message: string;
  onRetry: () => void;
}

const ErrorScreen = ({ message, onRetry }: Props) => {
  return (
    <div className="error-screen">
      <div className="error-screen__content">
        <div className="error-screen__icon">⚠️</div>

        <h2 className="error-screen__title">Server is unavailable</h2>

        <p className="error-screen__message">
          {message || 'Something went wrong. Please try again.'}
        </p>

        <button className="error-screen__button" onClick={onRetry}>Try again</button>
      </div>
    </div>
  );
};

export default ErrorScreen;
