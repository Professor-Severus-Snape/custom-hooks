import { useState, useEffect } from 'react';

const usePing = () => {
  const [showLoader, setShowLoader] = useState(false); // показ лоадера

  const [pinged, setPinged] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    // задержка перед показом лоадера (чтобы не мелькал):
    const timer = setTimeout(() => {
      setShowLoader(true);
    }, 600);

    const checkPing = async () => {
      try {
        const response = await fetch(import.meta.env.VITE_URL + '/ping', {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error('Server not reachable');
        }

        setPinged(true);
      } catch (err) {
        // игнорируем отменённый запрос:
        if (err instanceof Error && err.name === 'AbortError') {
          return;
        }

        setError(err instanceof Error ? err : new Error('Unknown error'));
      } finally {
        clearTimeout(timer);
        setLoading(false);
      }
    };

    checkPing();

    return () => {
      controller.abort(); // отменяем fetch
      clearTimeout(timer); // чистим таймер
    };
  }, []);

  return { showLoader, pinged, loading, error };
};

export default usePing;
