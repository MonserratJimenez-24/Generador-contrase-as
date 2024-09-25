let cantidadCaracteres = document.getElementById('cantidad');
//let y var  declarar variables  
let boton = document.getElementById('generar');
let contraseña = document.getElementById('contrasena');
let boton1 = document.getElementById('limpiar');
let mostrarMensaje = document.getElementById('prueba')

const cadenaCaracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_!@#$%^&*';


//funciones
function generar(){
    
    let numDigitado = parseInt(cantidadCaracteres.value);
    //console.log(numDigitado);
    if(numDigitado< 6) {
      //Mandar mensajes
     alert("La cantidad de caracteres tiene que ser mayor a 6 ");
    

    } else{ 
        let password ="";
        for (let i= 0 ; i < numDigitado ;i++ ) {
               
            let numAleatorio = cadenaCaracteres[Math.floor(Math.random() * cadenaCaracteres.length)];
            console.log(numAleatorio);  
            password +=numAleatorio;
        }
        contraseña.value= password;
       validarContraseña(password);
       boton1.style.display = "block";
    }
    
}

function limpiar(){
    contraseña.value ='';
    cantidadCaracteres.value ="";
    mostrarMensaje.style.display ="none";
}

function validarContraseña(password){
    const numero = /\d/.test(password);
    const letraMayuscula = /[A-Z]/.test(password);
    const letraMinuscula = /[a-z]/.test(password);
    const especialCaracter = /[_!@#$%^&*]/.test(password);

    if(numero && letraMayuscula && letraMinuscula || especialCaracter)
        {
            mostrarMensaje.innerText="La contraseña es fuerte :)";
            mostrarMensaje.style.display = "block";
        } 
        else{
            mostrarMensaje.innerText="La contraseña es débil :(";
            mostrarMensaje.style.display = "block";
        }
}


//Tipo de dato:  cadena de texto 
//let texto ="texto";
//método
//console.log(typeof cantidadCaracteres);











