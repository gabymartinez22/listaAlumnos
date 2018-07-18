

//cuando creamos la promesa (ticket)
const promises = new Promise((res,rej)=>{
setTimeout(()=>res('acabosetTimeout'),5000);


res(cont);
});

const promise2 = new Promise((res,rej)=>{
    let cont = 0;
 for(let i =0; i<10000; i++){
 cont++;
 
 }
 res(cont);
 });

//consumes la promesa
promises.then((res)=> console.log(res));
promise2.then((res)=> console.log(res));
console.log('hola');