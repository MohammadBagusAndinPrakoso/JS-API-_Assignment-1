const express = require("express")
const app = express()

// set to read a request from JSON format

app.use(express.json())
// JSON is String

app.post("/array", (request, response) => {
    // store the request data
    let data = request.body.orang

    // membuat variabel untuk menampung jumlah orang sesuai status usianya
    let jmlRemaja = 0, jmlDewasa = 0, jmlTua = 0

    for (let i = 0; i < data.length; i++) {
        if (data[i].umur >= 12 && data[i].umur <= 23) {
            jmlRemaja += 1
        } else if (data[i].umur >= 24 && data[i].umur <= 55) {
            jmlDewasa += 1
        } else if (data[i].umur > 55) {
            jmlTua += 1
        }
    }

    return response.json({
        "jumlah_remaja" : jmlRemaja,
        "jumlah_dewasa" : jmlDewasa,
        "jumlah_tua" : jmlTua
    })
})

app.listen(8000, () => {
    console.log('Server run on port 8000');
})