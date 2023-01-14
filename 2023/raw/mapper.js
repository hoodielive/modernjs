const log = console.log;
let items = ['A', 'B', 'C', 'D', 'E', 'F'];

function chunk(items, count) {
  return items.map((item, index) => {
    return items.slice(item * count, count);
  });
}


log(chunk(items, 3));
