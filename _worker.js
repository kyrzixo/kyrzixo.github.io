export async function onRequest(context) {
  const url = new URL(context.request.url);

  const apiUrl =
    "https://api.kyrzixo.workers.dev" +
    url.pathname +
    url.search;

  return fetch(apiUrl, context.request);
}
