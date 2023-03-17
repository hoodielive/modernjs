function square(a, b) 
{
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("Callback hell!")
    }, 2000)
  })
}

async function output(a, b) 
{
  const result = await square(a, b)
  console.log(result)
}

output(10, 2)
