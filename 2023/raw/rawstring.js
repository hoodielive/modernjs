let text = String.raw`"\n" is taken literally.
    It'll be escaped instead of interpreted. `

console.log(text)

let name = 'Osa'
let emotion = 'love'

const tag = console.log

tag`Hello, ${ name }. I am ${ emotion } to meet you!`



