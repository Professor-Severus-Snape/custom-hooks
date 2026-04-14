import useJsonFetch from '../../hooks/useJsonFetch';
import Content from '../Content/Content';
import { Items } from '../../interfaces';
import { ServerResponse } from '../../interfaces/';

const Component = ({ path, title }: Items) => {
  const response: ServerResponse = useJsonFetch(path); // { data, loading, error }

  return <Content {...response} title={title} />;
};

export default Component;
