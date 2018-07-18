'use strict'

(function(global) {


const stateGenerator= (initialState) =>{

  const state = initialState;
  return{
    getState:()=>({...state}),
    agregaAlumno:(alumno)=>{state.alumnos.push(alumno)}
  
} 
}
global.stateGenerator=stateGenerator;

})(window);
