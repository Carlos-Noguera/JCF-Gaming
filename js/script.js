const html_code = document.querySelector('.html-code textarea');
const css_code = document.querySelector('.css-code textarea');
const js_code = document.querySelector('.js-code textarea');
const result = document.querySelector('#result');

let nombre=prompt('Introduce tú nombre');
let h1 = document.getElementById('nombre');

h1.innerHTML+=nombre;

function run(){
    localStorage.setItem('html_code',html_code.value);
    localStorage.setItem('css_code',css_code.value);
    result.contentDocument.body.innerHTML =`<style>${localStorage.css_code}</style>`+localStorage.html_code;
}
function correr() {
    localStorage.setItem('html_code',html_code.value);
    localStorage.setItem('css_code',css_code.value);
    result.contentDocument.body.innerHTML =`<style>${localStorage.css_code}</style>`+localStorage.html_code;
    localStorage.setItem('js_code',js_code.value);
    result.contentWindow.eval(localStorage.js_code);
}


html_code.onkeyup = ()=> run();
css_code.onkeyup = ()=> run();




html_code.value= localStorage.html_code;
css_code.value= localStorage.css_code;
js_code.value= localStorage.js_code;

//implementar 
function evaluarCodigo(){
    
    if(codigo=='INFOTEC'){
        document.getElementById('two').style.visibility = "visible"; // show
        
    }else{
        document.getElementById('two').style.visibility = "hidden"; // hide
    }
}


//AQUÍ VA EL NÚMERO 2


const html_code2 = document.querySelector('.html-code2 textarea');
const css_code2 = document.querySelector('.css-code2 textarea');
const js_code2 = document.querySelector('.js-code2 textarea');
const result2 = document.querySelector('#result2');


function run2(){
    localStorage.setItem('html_code2',html_code2.value);
    localStorage.setItem('css_code2',css_code2.value);
    result2.contentDocument.body.innerHTML =`<style>${localStorage.css_code2}</style>`+localStorage.html_code2;
}
function correr2() {
    localStorage.setItem('html_code2',html_code2.value);
    localStorage.setItem('css_code2',css_code2.value);
    result2.contentDocument.body.innerHTML =`<style>${localStorage.css_code2}</style>`+localStorage.html_code2;
    localStorage.setItem('js_code2',js_code2.value);
    result2.contentWindow.eval(localStorage.js_code2);
}


html_code2.onkeyup = ()=> run2();
css_code2.onkeyup = ()=> run2();




html_code2.value= localStorage.html_code2;
css_code2.value= localStorage.css_code2;
js_code2.value= localStorage.js_code2;

//AQUÍ VA EL NÚMERO 3 
const html_code3 = document.querySelector('.html-code3 textarea');
const css_code3 = document.querySelector('.css-code3 textarea');
const js_code3 = document.querySelector('.js-code3 textarea');
const result3 = document.querySelector('#result3');


function run3(){
    localStorage.setItem('html_code3',html_code3.value);
    localStorage.setItem('css_code3',css_code3.value);
    result3.contentDocument.body.innerHTML =`<style>${localStorage.css_code3}</style>`+localStorage.html_code3;
}
function correr3() {
    localStorage.setItem('html_code3',html_code3.value);
    localStorage.setItem('css_code3',css_code3.value);
    result3.contentDocument.body.innerHTML =`<style>${localStorage.css_code3}</style>`+localStorage.html_code3;
    localStorage.setItem('js_code3',js_code3.value);
    result3.contentWindow.eval(localStorage.js_code3);
}


html_code3.onkeyup = ()=> run3();
css_code3.onkeyup = ()=> run3();

html_code3.value= localStorage.html_code3;
css_code3.value= localStorage.css_code3;
js_code3.value= localStorage.js_code3;






