//Exercise #1
(() =>{
    let num_transacciones = prompt("Indica el numero de transacciones");
    trasanccion(num_transacciones);
})();

function trasanccion(numTransacciones){
    var total = null; 
    var impuestoTransaccion = numTransacciones*3;
    console.log(impuestoTransaccion);
    for(let i = 0; i<numTransacciones;i++){
        let pagos = prompt(`Ingresa el monto de la transaccion`);
        total = Number(total)+Number(pagos);
        console.log(total)
    }
    total += impuestoTransaccion;
    total = total+(total*0.01);
    alert(`El total de a pagar es: ${total} dolares`);
}

//Exercise #2.1
var p1 = prompt("Ingresa tu nombre persona 1 ");
var p2 = prompt ("Ingresa tu nombre persona 2");
var p3 = prompt ("Ingresa tu nombre persona 3");

function nameAmigos(name1,name2,name3){
    
alert("Bienvenido "  + name1 + " "+ name2 + " " + name3 );
}
nameAmigos (p1,p2,p3);



//Exercise #2.2
var year = prompt("Ingresa tu año de nacimiento ");
var now = 2022;

function birth(num1,num2)
{
    var res = num2-num1;
    alert("Tu edad es "+ res)
}
birth(year,now);


//Exercise #2.3
var p1 = prompt("Ingresa tu nombre persona 1 ");
var edad1 = prompt("Ingresa tu edad persona 1");
var p2 = prompt ("Ingresa tu nombre persona 2");
var edad2 = prompt ("Ingresa tu edad persona 2");
var p3 = prompt ("Ingresa tu nombre persona 3");
var edad3 = prompt ("Ingresa tu edad persona 3");

function amigos(amx1,amx2,amx3, edad1, edad2, edad3){
    
alert("Bienvenido "  + amx1 +" Tu edad es " + edad1 + " Bienvenido "  + amx2 +" Tu edad es " + edad2 + " Bienvenido "  + amx3 +" Tu edad es " + edad3 );
}
amigos (p1,p2,p3, edad1, edad2, edad3);



//Challenge Yourself
function approve (){
    var calificacion = parseInt(prompt("Ingresa tu calificación "));
    if (calificacion >= 5 && calificacion <= 8 ) {
        alert("Tu status es " + true);
        }
         else if (calificacion > 8 && calificacion <=10) {
        alert("Tu status es Excelet");
         } 
         else if (calificacion == 11) {
            alert("Tu status es Perfec! :)");
                }
        else if (calificacion > 11) {
        alert("Ingresa una calificacion valida");
            }
       else{
        alert("Tu status es " + false);
             }
        }   
approve();