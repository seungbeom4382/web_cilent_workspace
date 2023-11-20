const foo = document.querySelector("#foo");
const bar = document.querySelector("#bar");

function printValue(){
    console.log(foo.innerHTML);
    bar.innerHTML = foo.innerHTML;
}
