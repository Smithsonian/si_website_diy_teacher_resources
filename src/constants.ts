export const DIY_URL = 'https://datalabs.cfa.harvard.edu/diy';

const getAPIBaseUrl = (): string => {
  if (import.meta.env.BASE_URL) {
    const baseParts = import.meta.env.BASE_URL.split('/');
    baseParts.pop();
    baseParts.push('api');
    return baseParts.join('/');
  }
  return '/api';
};

export const API_BASE_URL = getAPIBaseUrl();
