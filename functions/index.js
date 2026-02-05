export async function onRequest(context) {
  const url = new URL(context.request.url);

  // Your worker base URL
  const workerBase = "https://api.kyrzixo.workers.dev";

  // Preserve full path and query
  const targetUrl = workerBase + url.pathname + url.search;

  const response = await fetch(targetUrl, {
    method: context.request.method,
    headers: context.request.headers,
    body: context.request.body,
    redirect: "manual"
  });

  return new Response(response.body, response);
}
