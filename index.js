const express = require('express')
const app = express();

app.get('/siswa',(request,response )=>{
    response.end('Menampilkan siswa');
})

app.get('/siswa/:nama',(request,response)=>{
    //Proses dengan siswa bernama x
    let namaSiswa = request.params.nama;

    response.end("Menampilkan siswa dengan nama : " + namaSiswa)
})
app.listen('3000',(e)=>{
   console.log(e)
})