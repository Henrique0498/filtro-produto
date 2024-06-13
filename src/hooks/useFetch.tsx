import React from "react";

type TypeJsonErro = {
  message: string;
};

export function useFetch<T>() {
  const [data, setData] = React.useState<T | null>(null);
  const [error, setError] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState(false);

  const request = React.useCallback(
    async (url: string, options: RequestInit) => {
      let response: Response | null = null;
      let json: T | null = null;

      try {
        setError(null);
        setLoading(true);
        response = await fetch(url, options);
        json = await response.json();

        if (response.ok === false) {
          const newJson = json as TypeJsonErro;

          throw new Error(newJson.message);
        }
      } catch (err: unknown) {
        json = null;

        if (err instanceof Error) {
          setError(err.message);
        }
      } finally {
        setData(json);
        setLoading(false);

        // eslint-disable-next-line no-unsafe-finally
        return { response, json };
      }
    },
    []
  );

  return {
    data,
    loading,
    error,
    request,
  };
}
