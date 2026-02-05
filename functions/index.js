export async function onRequest(context) {
  const workerURL = "https://api.kyrzixo.workers.dev";

  const url = new URL(context.request.url);
  const target = workerURL + url.pathname + url.search;

  return fetch(target, {
    method: context.request.method,
    headers: context.request.headers,
    body: context.request.body
  });
}
