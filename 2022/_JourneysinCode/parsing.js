let log = console.log

log(parseInt('24'))
log(parseFloat('24.987'))
log(parseInt('32') + 1)


log(true > '2') // false (true implicitly converted to number, 1 < 2)
log('1' < 2)
log(1 < 'abc')
log(1 > null) // false

log(1 > undefined) // false

let a = new Date(2022) < 134596594949494
log(a)

let nuller = ({ toString: function() {return 123}}) > 122
log(nuller)

let bitField = 0;

const KEY_BITS = [4, 1, 8, 2]
const KEY_MASKS = [0b1011,0b1110,0b0111,0b1101]

window.onkeydown = window.onkeyup = function(e)
{
  if (e.keyCode >= 37 && e.keyCode < 41)
  {
    if (e.type === "keydown")
    {
      bitField |= KEY_BITS[e.keyCode - 37];
    }
    else
    {
      bitField &= KEY_MASKS[e.keyCode - 37];
    }
  }
}
