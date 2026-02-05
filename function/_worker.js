export default {
  async fetch(request) {
    const workerBase = "https://api.kyrzixo.workers.dev";

    const url = new URL(request.url);
    const target = workerBase + url.pathname + url.search;

    return fetch(target, request);
  }
};
