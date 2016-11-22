import 'isomorphic-fetch';
import querystring from 'querystring';
import { parse as parseUrl } from 'url';

export function buildUrl (baseUrl, options = null) {
  const queryString = !!options ? querystring.stringify(options) : '';
  return !!queryString ? (baseUrl + '?' + queryString) : baseUrl;
}

function remoteCall (path, method, data) {
  let url = path;
  // add slashes to the end because Django likes slashes
  // except url with querystrings
  if (!url.endsWith('/') && !parseUrl(url).search) {
    url += '/';
  }

  const payload = {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: method
  };

  if (!!data) {
    if (method === 'GET') {
      url = buildUrl(url, data);
    } else {
      payload.body = JSON.stringify(data);
    }
  }
  return fetch(url, payload).then(response => response.json());
}

export function get (path, data) {
  return remoteCall(path, 'GET', data);
}

export function post (path, data) {
  return remoteCall(path, 'POST', data);
}

export function put (path, data) {
  return remoteCall(path, 'PUT', data);
}

export function patch (path, data) {
  return remoteCall(path, 'PATCH', data);
}

export function del (path, data) {
  return remoteCall(path, 'DELETE', data);
}
