const express = require("express");
const app = express();

app.get("/",function(req,res) {
  res.send("mi primer servidor")
})

app.get("/chat",function(req,res) {
  res.send("aqui te aclaramos tus dudas")
})

app.get("/chat/:usuario",function(num,res) {
  if(num.params.usuario % 2 == 0){
     return "par";
  }
  else {
    return "impar";
  };
  alert("ingresa usuario"+num.params.usuario)
  res.send("el numero es "+num)
})


app.listen(8080,function(){
  console.log("Servidor escuchando en el puerto 8080")
})