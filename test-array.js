const auto = {
    brand: "tesla",
    model: "x",
    year: 2019,
    price: 1000,
    seats: 7
}

Object.entries(auto)

.forEach(([key,value])=> {
    console.log(`${key.toUpperCase()} -- ${value}`) // template literals
    console.log(key + "--" + value)
}) 

// una de las maneras para recorrer el array