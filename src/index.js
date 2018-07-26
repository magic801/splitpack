require('./temp/t1')
require('./temp/t2')

import $ from 'jquery'

const sayHi = (msg = 'wang') => {
  console.log(`nihao: ${msg}`)
}
sayHi('ebss')

let $el = $('#app')
$el.html(new Date())