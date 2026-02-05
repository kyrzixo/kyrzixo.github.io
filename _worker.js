export async function onRequest(context) {
  const { request } = context;

  const url = new URL(request.url);
  const target = "https://api.kyrzixo.workers.dev" + url.pathname + url.search;

  const proxyRequest = new Request(target, {
    method: request.method,
    headers: request.headers,
    body: request.body,
    redirect: "manual"
  });

  const response = await fetch(proxyRequest);

  // Clone response so headers like Set-Cookie are preserved
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: response.headers
  });
}
