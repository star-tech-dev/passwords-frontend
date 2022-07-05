/**
 * next tick helper
 * @param cb {function}
 * @param delay {number}
 */
export const nextTick = (cb: any, delay?: number) => {
  setTimeout(cb, delay || 0)
}

export default {
  nextTick
}
