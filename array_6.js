const express = require("express")
const app = express()

// set to read a request from JSON format

app.use(express.json())
// JSON is String

app.post("/caridata", (request, response) => {
    let keyword = request.body.keyword

    let data = [
        {nis : 101, nama : "Adinda", alamat : "Araya"},
        {nis : 102, nama : "Andika", alamat : "Sawojajar"},
        {nis : 103, nama : "Suji", alamat : "Araya"},
        {nis : 104, nama : "Fahad", alamat : "Blimbing"},
        {nis : 105, nama : "Rian", alamat : "Lowokwaru"},
        {nis : 106, nama : "Fatih", alamat : "Pakis"},
        {nis : 107, nama : "Indi", alamat : "Pakis"},
        {nis : 108, nama : "Aminah", alamat : "Sawojajar"},
        {nis : 109, nama : "Mail", alamat : "Wagir"},
        {nis : 110, nama : "Opet", alamat : "Sawojajara"}
    ]

    let jumlah_data = 0, hasil = []

    for (let i = 0; i < data.length; i++) {
        if (keyword == data[i].nis || keyword == data[i].nama || keyword == data[i].alamat) {
            jumlah_data += 1
            hasil.push(
                data[i]
            )
        }
    }

    return response.json({
        "Jumlah Data" : jumlah_data,
        "Data " : hasil
    }) 
})

app.listen(8000, () => {
    console.log('Server run at port 8000');
})