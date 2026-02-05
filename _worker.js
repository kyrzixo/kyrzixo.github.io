export async function onRequest(context) {
  const workerBase = "https://api.kyrzixo.workers.dev";
  const url = new URL(context.request.url);

  const targetUrl = workerBase + url.pathname + url.search;

  const response = await fetch(targetUrl, {
    method: context.request.method,
    headers: context.request.headers,
    body: context.request.body,
    redirect: "manual"
  });

  // Rebuild the response so Set-Cookie and redirects work
  return new Response(response.body, {
    status: response.status,
    headers: response.headers
  });
}
