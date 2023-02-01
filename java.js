
var nombre=x;
var altura=y;

var concatenacion = nombre + '' + altura;
    

if(altura >= 190){
    datos.innerHTML +=  '<h1> eres una persona ALTA</h1>';
}else{
    datos.innerHTML +=  '<h1> eres una persona BAJA</h1>';
}

for(var i = 0; i<=2020; i++){
    datos.innerHTML += '<h2>estamos en el año: '+i;   
}

function muestraMiNombre(nombre , altura){
    var misDatos = 

        <h1>caja de datos</h1>
        <h2>mi nombre es: {nombre}</h2>
        <h3>mido: {altura} cm</h3>

    . ;

    return misDatos;
}



function imprim
ir(){
    var datos = document.getElementById("datos");
    datos.innerHTML = muestraMiNombre();
}

muestraMiNombre("nombre", 520);

var nombres = ['valor1' , 'valor2' , 'valor3'];

for(i = 0;i< nombres.length;i++){
    documents.write(nombres[i] + '<br>');
}