const arr = [1, 2, 3];
const squares = arr.map(x => x * x);

function UiComponent()
{
    const button = document.getElementById('myButton');
    button.addEventListener('click', () => {
        log('CLICK')
        this.handleClick();
    })
}

var sum = function(a, b) {
    return a + b;
}
console.log(sum(2, 3));

let sums = a => a;

console.log(sums(4));

let ball = function(x, y, vx, vy ) 
{
    this.x = x; 
    this.y = y;
    this.vx = vx;
    this.vy = vy;
    this.dt = 25;

    setInterval(() =>  {
        this.x += vx;
        this.y += vy;
        console.log(this.x, this.y);
    }, this.dt);
}

let baller = new ball(0, 0, 10000, 10000);

console.log(baller);