import { i } from './parent.js'

export default () => {
  console.log('child > ' + i)
}

if (import.meta.hot) {
  import.meta.hot.accept((m) => {
    m.default()
  })
}
