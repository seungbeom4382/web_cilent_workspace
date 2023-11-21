
function test2(){
//1 z = 100
let z = 50;
(() => {
    let z = 55;
    z += 45;
    console.log(`z = ${z}`);
})();              
console.log(`z = ${z}`);   


}