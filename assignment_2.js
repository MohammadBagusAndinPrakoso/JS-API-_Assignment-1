// load library express
const { request, response } = require("express")
let express = require("express")

// inisiasi objek baru dari express
let app = express()

app.get("/convert/celcius/:celcius", (request, response) => {
    // tampung data
    let celcius = request.params.celcius

    let fahrenheit = (celcius * 9/5) + 32
    let kelvin = celcius + 273.15
    let reamur = celcius * 4/5

    return response.json({
        celcius: celcius,
        result: {
            fahrenheit: fahrenheit,
            kelvin: kelvin,
            reamur: reamur
        }
    })
})

app.get("/convert/reamur/:reamur", (request, response) => {
    // tampung data
    let reamur = request.params.reamur

    let celcius = reamur * 5/4
    let fahrenheit = (reamur * 9/4) + 32
    let kelvin = celcius + 273.15

    return response.json({
        reamur: reamur,
        result: {
            celcius: celcius,
            fahrenheit: fahrenheit,
            kelvin: kelvin
        }
    })
})

app.get("/convert/kelvin/:kelvin", (request, response) => {
    // tampung data
    let kelvin = request.params.kelvin

    let celcius = kelvin - 273
    let fahrenheit = (9/5 * celcius) + 32
    let reamur = celcius * 4/5

    return response.json({
        kelvin: kelvin,
        result: {
            celcius: celcius,
            fahrenheit: fahrenheit,
            reamur: reamur
        }
    })
})

app.get("/convert/fahrenheit/:fahrenheit", (request, response) => {
    // tampung data
    let fahrenheit = request.params.fahrenheit

    let celcius = 5/9 * (fahrenheit - 32)
    let kelvin = (5/9 * (fahrenheit - 32)) + 273
    let reamur = 4/9 * (fahrenheit - 32)

    return response.json({
        fahrenheit: fahrenheit,
        result: {
            celcius: celcius,
            reamur: reamur,
            kelvin: kelvin
        }
    })
})

app.listen(8000, () => {
    console.log('Server run on port 8000');
})