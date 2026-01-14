// This does not check DEV, because we have a Vite proxy directing the dev FE to
// the dev API
const getAPIBaseUrl = (): string => {
  const appBaseUrl = import.meta.env.BASE_URL || '/';
  const baseParts = appBaseUrl.split('/');
  baseParts.pop();
  baseParts.push('api');
  return baseParts.join('/');
};

export const API_BASE_URL = getAPIBaseUrl();

// This checks DEV because the URLs won't make any sense on dev,
// they only make sense on deployment
export const DATA_LABS_BASE = import.meta.env.DEV
  ? 'https://datalabs.cfa.harvard.edu'
  : `${import.meta.env.BASE_URL}/..`;
export const DIY_URL = `${DATA_LABS_BASE}/diy/`;
export const SPECLAB_URL = `${DATA_LABS_BASE}/spectrumlab/`;
