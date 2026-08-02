import { useState } from 'react';

export default function useAsync(asyncFunction) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const run = async (...args) => {
    try {
      setLoading(true);
      setError(null);
      const result = await asyncFunction(...args);
      return result;
    } catch (err) {
      console.log(err);

      setError(err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { run, loading, error };
}
