import { API_BASE_URL } from '@/constants';
import type z from 'zod';

type Method = 'GET' | 'POST';

export const fetchAndParse = async <S>(
  path: string,
  method: Method,
  responseSchema: z.ZodType<S>,
  body?: object,
): Promise<S> => {
  const options: RequestInit = { method };
  if (body) {
    options.body = JSON.stringify(body);
    options.headers = {
      'Content-Type': 'application/json',
    };
  }
  const response = await fetch(`${API_BASE_URL}${path}`, options);
  const result = await response.json();
  if (!response.ok) {
    if (result?.error?.description) {
      throw new Error(result.error.description);
    } else {
      throw new Error(`${path} response code: ${response.status}`);
    }
  }
  const parsedResult = responseSchema.parse(result);
  return parsedResult;
};
