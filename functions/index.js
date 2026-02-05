export async function onRequest(context) {
  const url = new URL(context.request.url);

  // Your worker origin
  const workerOrigin = "https://api.kyrzixo.workers.dev";

  // Keep the same path and query
  const targetUrl = workerOrigin + url.pathname + url.search;

  const response = await fetch(targetUrl, {
    method: context.request.method,
    headers: context.request.headers,
    body: context.request.body,
    redirect: "follow"
  });

  return response;
}
