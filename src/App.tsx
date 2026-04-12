import Component from './components/Component/Component';
import { Items } from './interfaces';

const App = () => {
  const items: Items[] = [
    { id: 1, title: 'error', path: '/error' },
    { id: 2, title: 'load', path: '/loading' },
    { id: 3, title: 'success', path: '/success' },
  ];

  return (
    <>
      {items.map((item) => (
        <Component key={item.id} {...item} />
      ))}
    </>
  );
};

export default App;
