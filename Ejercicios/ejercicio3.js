


const squareEjercicio = document.getElementById('square-test');
const squareLog = document.getElementById('square-log');
const boton =document.getElementById('reiniciar');
console.log(squareEjercicio);


//document.getElementById('square-test').addEventListener('click',function(){ 
//  alert('Alguien hizo click');
//});


squareEjercicio.addEventListener('click', function (evento) {
    const span = document.createElement('span');
    span.innerText = evento.target.style.backgroundColor;
    console.log(span);

    // console.log(evento.target);
    //console.log(evento.target.style);
    //    this.setAttribute("class","red-background");  tambien funciona
    //evento.target.style.backgroundColor = 'red';
    if (evento.target.style.backgroundColor === 'red') {

        evento.target.style.backgroundColor = 'blue';
    }
    else {

        evento.target.style.backgroundColor = 'red';

    }

    squareLog.appendChild(span);


    
//boton.addEventListener('click', function (event){
  //  squareLog.innerText='';
  //  evento.target.style.backgroundColor='white';
    //getElementById('square-test').event.target.style.backgroundColor='white';
   
//});



    
});




    
boton.addEventListener('click', function (event){
    squareLog.innerText='';
    squareEjercicio.style.backgroundColor='white';
    //getElementById('square-test').event.target.style.backgroundColor='white';
   
});






