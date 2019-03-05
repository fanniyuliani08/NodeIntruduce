//import modules
const express = require('express');
const app = express();
const bodyParser = require('body-parser');//import body-parser

app.use(bodyParser.urlencoded({extended: false})) //harus berada diatas semua endpoint

//method get
app.get('/test', (req, res)=>{
    res.end("ini get XI RPL 2");
});

//method post
app.post('/test', (req, res)=>{
    res.end("ini post XI RPL 2");
});

//endpoint get dengan menggunakan parameter
app.get('/siswa/:nama', (request, response)=>{ // :nama merupakan parameter
let namaSiswa = request.params.nama; // deklarasi variabel namaSiswa
response.end("menampilkan nama siswa+ namaSiswa");
});
//endpoint post, dengan menggunakan body-parser untuk mengirimkan data
app.post('nama, (request, response)=>{ 
    let namaSiswa = request.body.name; // deklarasi variabel namaSiswa
    response.end("menampilkan nama siswa+ namaSiswa");
    });
//inisialisasi port
app.listen('3000', (e)=>{
    console.log(e);
});