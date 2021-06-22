let cities = [
    {name: 'Los Angeles', population: 3702621},
    {name: 'New York', population: 8175133},
    {name: 'Chicago', population: 2695598},
    {name: 'Houston', population: 2099451},
    {name: 'Philadelphia', population: 1526006}
]

let newCities = cities.filter(({population}) => {
    return population
})

console.log(newCities)