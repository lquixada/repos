import fetch from 'cross-fetch';

export default (url) => {
  const separator = (url.indexOf('?')>-1?'&':'?');
  // This token has been added here temporarilly. It was created just for challenge purposes.
  return fetch(`${url}${separator}access_token=`);
};
