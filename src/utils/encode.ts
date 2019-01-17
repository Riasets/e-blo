export function encodeBody(body: object) {
  const info = [];
  for (const key of Object.keys(body)) {
    info.push(encodeURIComponent(key) + '=' + encodeURIComponent(body[key]));
  }
  return info.join('&');
}
