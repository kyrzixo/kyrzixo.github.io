export default {
  async fetch(request) {
    const workerBase = "https://api.kyrzixo.workers.dev";
    const url = new URL(request.url);

    const targetUrl = workerBase + url.pathname + url.search;

    // Create a new request to avoid body stream errors
    const proxyRequest = new Request(targetUrl, {
      method: request.method,
      headers: request.headers,
      body: request.method === "GET" || request.method === "HEAD"
        ? null
        : await request.clone().arrayBuffer(),
      redirect: "manual"
    });

    return fetch(proxyRequest);
  }
};
