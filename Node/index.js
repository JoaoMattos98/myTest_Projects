 
const express=require('express'); 
const app=express();
const port=8030;
const hostname='127.0.0.1';

app.get('/', function(req, res){
	res.send("Ola mundo usando express");
});

app.get('/info', function(req, res){
	res.send("Essa é a pagina de informações!!!!")
});

app.listen(port, hostname, function(){
    console.log("Servidor rodando!!!!");
});
