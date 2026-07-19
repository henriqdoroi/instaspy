export async function fakeDelay(ms = 600) {
  await new Promise((resolve) => setTimeout(resolve, ms));
  return { ok: true };
}
export const api = { fakeDelay };
export default api;
