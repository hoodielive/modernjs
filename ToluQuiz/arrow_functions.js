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