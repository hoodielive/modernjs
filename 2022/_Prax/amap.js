
function map(f, a)
{
  let result = [];
  let i;

  for (i = 0; i != a.length; i++)
  {
    result[i] = f(a[i]);
  }
  return result;
}
