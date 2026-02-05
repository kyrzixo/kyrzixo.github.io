export default {
  async fetch(request) {
    const workerBase = "https://api.kyrzixo.workers.dev";

    const url = new URL(request.url);

    const targetUrl = workerBase + url.pathname + url.search;

    const response = await fetch(targetUrl, {
      method: request.method,
      headers: request.headers,
      body: request.body
    });

    return response;
  }
};
