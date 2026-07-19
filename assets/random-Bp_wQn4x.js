export function randomBetween(min = 0, max = 1) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
export function pickRandom(items = []) {
  return items[Math.floor(Math.random() * items.length)];
}
export default randomBetween;
