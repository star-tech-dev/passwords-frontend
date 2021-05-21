/**
 * next tick helper
 * @param cb {function}
 */
export const nextTick = (cb: any) => {
  setTimeout(cb, 0)
}

export default {
  nextTick
}
