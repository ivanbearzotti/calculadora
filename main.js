// FUNCIONES

function ingresarNumero(primerSegundo) {
    let num = prompt("Ingrese el " + primerSegundo + " número");
    while (isNaN(num)) {
        alert("Número incorrecto. Vuelva a intentarlo.");
        num = prompt("Ingrese el " + primerSegundo + " número");
    }
    return parseFloat(num);
}

// SIMULADOR DE CALCULADORA DE SUMA, RESTA, MULTIPLICACIÓN, DIVISIÓN Y PROMEDIO ENTRE DOS NÚMEROS

let entrada = prompt('BIENVENIDO A LA CALCULADORA\nSi quiere continuar ingrese "SI", de lo contrario ingrese "NO"');

while(entrada != "SI" && entrada != "NO"){
    alert("Vuelva a intentarlo");
    entrada = prompt('Bienvenido a la calculadora. Si quiere continuar ingrese "SI", de lo contrario ingrese "NO".');
}

let num1;

let num2;

while(entrada){
    
    if(entrada == "SI"){
        alert("A continuación, se le solicitará que ingrese por separado dos números y la operación requerida");
        num1 = ingresarNumero("primer");
        num2 = ingresarNumero("segundo");

        let operacion = prompt('Seleccione la operación que desea realizar entre ambos numeros: ingrese “+” para sumar, “-“ para restar, “*” para multiplicar, “/“ para dividir o “p” para promediar');
        while(operacion != "+" && operacion != "-" && operacion != "*" && operacion != "/" && operacion != "p"){
            alert("Operación no válida. Vuelva a intentarlo.");
            operacion = prompt("Seleccione nuevamente la operación que desea realizar entre ambos numeros: ingrese “+” para sumar, “-“ para restar, “*” para multiplicar, “/“ para dividir o “p” para promediar'");
        }
        
        let resultado;
        
        if(operacion == "+"){
            resultado = num1 + num2;
            alert(num1 + " + " + num2 + " = " + resultado);
        }
        else if(operacion == "-"){
            resultado = num1 - num2;
            alert(num1 + " - " + num2 + " = " + resultado);
        }
        else if(operacion == "*"){
            resultado = num1 * num2;
            alert(num1 + " * " + num2 + " = " + resultado);
        }
        else if(operacion == "/"){
            if(num2 == 0 || num2 == "0"){
                resultado = "Math Error"
                alert(num1 + " / " + num2 + " = " + resultado);
            } else if (num2 != 0){
                resultado = num1 / num2;
                alert(num1 + " / " + num2 + " = " + resultado);
            }
            resultado = num1 / num2;
            alert(num1 + " / " + num2 + " = " + resultado);
        }
        else if(operacion == "p"){
            resultado = (num1 + num2)/2;
            alert("( " + num1 + " + " + num2 + " ) / 2 = " + resultado);
        }
        entrada = prompt('Si desea realizar otra operacion ingrese "SI", de lo contrario ingrese "NO".')
    }
    else if(entrada == "NO"){
        alert("Vuelva pronto!");
        break;
    }else{
        alert("Vuelva a intentarlo.");
        entrada = prompt('Si desea realizar otra operacion ingrese "SI", de lo contrario ingrese "NO".');
    }
}