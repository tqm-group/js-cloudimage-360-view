import { removeParamByRegex } from './remove-param-by-regex';

const generateLowPreviewCdnUrl = (cdnUrl) => {
  const cleanedCdnUrl = removeParamByRegex(cdnUrl, 'width');
  const separator = cleanedCdnUrl.includes('?') ? '&' : '?';

  if (cleanedCdnUrl.includes('Signature')) {
    return cleanedCdnUrl;
  }

  return `${cleanedCdnUrl}${separator}width=${150 * devicePixelRatio}`;
};

export default generateLowPreviewCdnUrl;
