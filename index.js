import { Rebuild } from './rebuild.mjs'

const obj = Rebuild.createElement('div', null, 'a', 'b')
console.log(obj)

/** @jsx Rebuild.createElement */
// const element = (
//   <div id='foo'>
//     <a>bar</a>
//     <b />
//   </div>
// )
