export async function onRequest() {
  return new Response("FUNCTION WORKS", {
    headers: { "content-type": "text/plain" }
  });
}
