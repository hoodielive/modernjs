
const carPartID = (name, fn) => 
{
    const the_id = `CAR_PART_x8z0sl`;
    fn(`${the_id}_${name}`);
}

carPartID('Left Door', function(id) {
    console.log(`Car Part ID: ${id} is now in stock.`);
})