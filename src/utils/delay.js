export default async function delay(duration = 1000) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, duration);
  });
}
