const express = require("express")
const app = express()

// set to read a request from JSON format

app.use(express.json())
// JSON is String

app.post("/barang", (request, response) => {
    let barang = request.body.barang

    let total = 0

    for (let i = 0; i < barang.length; i++) {
        total += (barang[i].harga * barang[i].jumlah)
    }

    total *= 11/10

    return response.json({
        "Total Belanja " : total
    })
})

app.listen(8000, () => {
    console.log('Server run at port 8000');
})