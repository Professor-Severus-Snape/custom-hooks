import { useState, useEffect } from 'react';
import { Data } from '../interfaces';

// кастомный хук получения данных от сервера:
const useJsonFetch = (url: string) => {
  const [data, setData] = useState<Data | null>(null); // ответ от сервера
  const [loading, setLoading] = useState<boolean>(false); // процесс загрузки данных с сервера
  const [error, setError] = useState<Error | null>(null); // ошибка при получении данных от сервера

  useEffect(() => {
    const fetchJson = async () => {
      setLoading(true);

      try {
        const response = await fetch(import.meta.env.VITE_URL + url); // получаем данные
        const json = await response.json();

        if (!response.ok) {
          throw new Error(json.message || 'Request failed');
        }

        setData(json);
        setError(null);
      } catch (err) {
        if (err instanceof Error) {
          setError(err);
        } else {
          setError(new Error('Unknown error'));
        }
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchJson();
  }, [url]);

  return { data, loading, error };
};

export default useJsonFetch;
