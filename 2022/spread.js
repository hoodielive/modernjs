const log = console.log

function sum(foo, ...numbers) {
  log(foo)
  return numbers.reduce((prev, current) => prev + current);
}

log(sum(1, 2, 3, ' value'))

let foo = 'bar'

let template = `
    <div class="Alert",
      <p>${foo}</p>
    </div>
`.trim();

log(template);

c
