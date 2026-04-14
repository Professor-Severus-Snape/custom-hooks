import Component from './components/Component/Component';
import ErrorScreen from './components/ErrorScreen/ErrorScreen';
import Loader from './components/Loader/Loader';
import usePing from './hooks/usePing';
import { Items } from './interfaces';

const App = () => {
  const { showLoader, pinged, loading, error } = usePing(); // проверка доступности сервера

  const items: Items[] = [
    { id: 1, title: 'error', path: '/error' },
    { id: 2, title: 'load', path: '/loading' },
    { id: 3, title: 'success', path: '/success' },
  ];

  return (
    <>
      {loading && showLoader && <Loader />}

      {error && <ErrorScreen message={error.message} onRetry={() => window.location.reload()} />}

      {pinged && items.map((item) => <Component key={item.id} {...item} />)}
    </>
  );
};

export default App;
