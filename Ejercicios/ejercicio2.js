console.log('Hola mundo');
console.log(document.getElementById('square-test'));

document.getElementById('square-test').addEventListener('click',function(){ 
 alert('Alguien hizo click');
 document.getElementById('square-test').setAttribute("class","red-background");


});

let valor1 = 2;
let valor2 = 3;
let valor3 = 10;
let valor4 = 10;

const username = 'gaby';

 
//onst texto1= 'hola';
//const texto1= `Hola${nombre}`
//const texto2= 'Mundo';
//const nombre= 'gabriela';
//const saludo = `Hola ${nombre}`;
//const saludo = `Hola `+ nombre;
//console.log(saludo);


//console.log(texto1+texto2);

//console.log(texto1,texto2);




 console.log(sumaValores(valor3,valor4));



 const carro0= {
    color: 'rojo',
    dobleTraccion: false,
    puertas:4
}

const carro1= {
    color: 'blanco',
    dobleTraccion: false,
    puertas:2
}


const carro2= {
    color: 'azul',
    dobleTraccion: false,
    puertas:4
}


const carro3= {
    color: 'negro',
    dobleTraccion: false,
    puertas:4
}


const carro4= {
    color: 'verde',
    dobleTraccion: false,
    puertas:2
}



const carro5= {
    color: 'verde',
    dobleTraccion: false,
    puertas:2
}

const carros = [carro0,carro1,carro2,carro3,carro4];
//regresa valores, index y el array completo
carros.forEach(function(teRegresaValue, teRegresaIndex, teRegresaTodoCompleto){
    console.log(teRegresaValue,teRegresaIndex, teRegresaTodoCompleto);

});

var numero=[1,4,3,5]; 

//numeros.forEach(function(item, index){
    //numeros[index] = modificar(item, function(valor){
      //  return
   // }

//});


//function modificar(valor, modificador){
  //  return modificador(valor);
//}






 //function sumaValores(valor1,valor2){
     
  //  return valor1+valor2;

 //
