export async function onRequest(context) {
  const workerBase = "https://api.kyrzixo.workers.dev";

  // Get the requested path and query
  const url = new URL(context.request.url);
  const target = workerBase + url.pathname + url.search;

  // Forward the request to the worker
  const response = await fetch(target, {
    method: context.request.method,
    headers: context.request.headers,
    body: context.request.body
  });

  // Return worker response
  return new Response(response.body, response);
}
