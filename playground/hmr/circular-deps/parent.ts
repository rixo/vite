import child from './child.js'

export let i = 0

export default () => {
  i++
  console.group('parent')
  child()
  console.groupEnd()
}

if (import.meta.hot) {
  import.meta.hot.accept((m) => {
    m.default()
  })
}
