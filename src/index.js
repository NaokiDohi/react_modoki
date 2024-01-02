import { Rebuild } from './rebuild'

// const obj = Rebuild.createElement('div', null, 'a', 'b')
// console.log(obj)

/** @jsx Rebuild.createElement */
const element = (
  <div style='background: salmon'>
    <h1 style='text-align:center'>Hello World by Rebuild</h1>
  </div>
)

const container = document.getElementById('root')
Rebuild.render(element, container)
