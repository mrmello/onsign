export function waitToDimissNotification() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve()
    }, 4000)
  })
}