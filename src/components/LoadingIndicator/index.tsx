import { FunctionComponent } from 'react';
import { Loader, LoadingText } from './styles';

type LoadingIndicatorProps = {
  message?: string;
};
const LoadingIndicator: FunctionComponent<LoadingIndicatorProps> = ({
  message
}) => {
  return (
    <div className="loader-container">
      <Loader />
      <LoadingText className="loading-text">
        {message ? message : ''}
      </LoadingText>
    </div>
  );
};

export default LoadingIndicator;
