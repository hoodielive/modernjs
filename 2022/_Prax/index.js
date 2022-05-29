const rectangle = 
{
  sideA: 50,
  sideB: 10,
  color: 'red'
};

const calculateArea = rectangle =>
{
  const { sideA = 0, sideB = 0 } = rectangle;

  return sideA * sideB;
};

console.log(calculateArea(rectangle));
