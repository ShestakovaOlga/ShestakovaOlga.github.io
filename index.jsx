import React, { setGlobal } from 'reactn'
import { render } from 'react-dom'
import App from './App'



onresize()
window.addEventListener('resize', onresize)
function onresize() {
  const w = window.innerWidth
  let mode = ''
  if (w > 1200) {
    mode = 'pc'
  } else if (w > 760) {
    mode = 'tablet'
  } else {
    mode = 'phone'
  }
  setGlobal({
    mode
  })
}

setGlobal({
  mode: 'pc',
})

render(
  <App />
  , document.querySelector('#app')
)