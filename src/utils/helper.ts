export const delayLoop = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms))

export const randomIntFrom = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min)) + min
}
