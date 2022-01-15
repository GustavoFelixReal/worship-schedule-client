async function submitEffect<T extends (...args: any[]) => any>(
  fn: T,
  callback?: T
) {
  try {
    await fn()
    callback()
  } catch (error) {
    console.log(error)
  }
}

export { submitEffect }
