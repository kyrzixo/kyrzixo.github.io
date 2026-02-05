export async function onRequest(context) {
  const { request } = context;

  try {
    const url = new URL(request.url);

    const target = "https://api.kyrzixo.workers.dev" +
      url.pathname +
      url.search;

    const proxyRequest = new Request(target, {
      method: request.method,
      headers: request.headers,
      body: request.body,
      redirect: "manual"
    });

    const response = await fetch(proxyRequest);

    return new Response(response.body, {
      status: response.status,
      headers: response.headers
    });

  } catch (err) {
    return new Response("Proxy error: " + err.message, {
      status: 500
    });
  }
}
