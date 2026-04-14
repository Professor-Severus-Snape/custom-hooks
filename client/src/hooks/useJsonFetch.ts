import { useState, useEffect } from 'react';
import { API_URL } from '../config';
import { Data } from '../interfaces';

// кастомный хук получения данных от сервера:
const useJsonFetch = (url: string) => {
  const [data, setData] = useState<Data | null>(null); // ответ от сервера
  const [loading, setLoading] = useState<boolean>(false); // процесс загрузки данных с сервера
  const [error, setError] = useState<Error | null>(null); // ошибка при получении данных от сервера

  useEffect(() => {
    const controller = new AbortController();

    const fetchJson = async () => {
      setLoading(true);
      setError(null);

      try {
        // получаем данные:
        const response = await fetch(API_URL + url, { signal: controller.signal });
        const json = await response.json();

        if (!response.ok) {
          throw new Error(json.message || 'Request failed');
        }

        setData(json);
      } catch (err) {
        // игнорируем отменённые запросы:
        if (err instanceof Error && err.name === 'AbortError') {
          return;
        }

        setError(err instanceof Error ? err : new Error('Unknown error'));
        setData(null);
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    };

    fetchJson();

    return () => {
      controller.abort(); // отмена предыдущего запроса
    };
  }, [url]);

  return { data, loading, error };
};

export default useJsonFetch;
