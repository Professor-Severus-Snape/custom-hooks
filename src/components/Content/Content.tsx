import './content.css';
import { ServerResponse } from '../../interfaces';

interface Props extends ServerResponse {
  title: string;
}

const Content = ({ data, loading, error, title }: Props) => {
  return (
    <div className="content">
      <h3 className="content__title">{title}:</h3>

      {loading && (
        <div className="content__text content__text_pending">
          Still loading... Wait a moment! Please, don't go away!
        </div>
      )}

      {error && (
        <div className="content__text content__text_error">
          Sorry, you've got the error: "{error.message}"
        </div>
      )}

      {data && (
        <div className="content__text content__text_success">
          Success! You've got the response: "{data.message}"
        </div>
      )}
    </div>
  );
};

export default Content;
