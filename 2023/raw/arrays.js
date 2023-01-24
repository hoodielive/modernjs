let orishas = ["Ochosi", "Ogun", "Yemoja", "Osun"]

console.log(orishas)
console.log(orishas.shift())
orishas.forEach((orisha) => {
    if (orisha == 'Ogun')
    {
        console.log(`${orisha} is a powerful Orisha of War.`)
    }
})

