'use strict';



function borrarAlumnos(){
fetch('alumnos?nombre=  Odonnell')
method: 'DELETE';


}
(() => {
    

    fetch('/alumnos')
    .then((res)=>{
     return res.json();
    })

   .then((alumnos)=>{
  console.log(alumnos);
//   const alumnosNP= alumnos.map((alumno)=>{
//       return {nombre:alumno.nombre,
//         promedio: alumno.nombre

//     }
// }   );
//   console.log(alumnosNP);
const bAppend = appendLI('becados');
const aAppend = appendLI('asesorias');
const rAppend = appendLI('reprobados');

const  alumnosReprobados=alumnos.filter(alumno=>alumno.promedio <30);

     document.getElementById('reprobados').innerHTML= '';
      alumnosReprobados.forEach(alumnosReprobados => {
         rAppend(alumnosReprobados.nombre);
      
      
        var promRep= promRep+alumnosReprobados.promedio
        console.log(promRep)
});
   

     const  alumnosAsesorias=alumnos.filter(alumno=>alumno.promedio >=30 && alumno.promedio <80);
     console.log(alumnosAsesorias);

     document.getElementById('asesorias').innerHTML= '';
     alumnosAsesorias.forEach(alumnosAsesorias => {
    aAppend(alumnosAsesorias.nombre);
});
  

     const  alumnosBecados=alumnos.filter(alumno=>alumno.promedio >=80 || (alumno.destacado && alumno.promedio >=30));
     console.log(alumnosBecados);
     document.getElementById('becados').innerHTML= '';
     alumnosBecados.forEach(alumnosBecados => {
    bAppend(alumnosBecados.nombre);
});
        

})





    function appendLI(id) {
        const list = document.getElementById(id);
        return (text) => {
            const listItem = document.createElement('li');
            listItem.appendChild(document.createTextNode(text));
            list.appendChild(listItem);
        }
    }
})();
