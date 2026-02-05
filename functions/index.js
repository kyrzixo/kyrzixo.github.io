export async function onRequest(context) {
  const workerURL = "https://api.kyrzixo.workers.dev";

  const url = new URL(context.request.url);

  // Rebuild the full target URL
  const targetURL = new URL(workerURL);
  targetURL.pathname = url.pathname;
  targetURL.search = url.search;

  // Clone the original request
  const newRequest = new Request(targetURL.toString(), context.request);

  return fetch(newRequest);
}
