// version 4 de js

function validar(formulario) {

    if (control("nombre").value.length >= 20) {
        alert("Escriba por lo menos 20 caracteres en el campo de nombre");
        //focus nos auida a focalizar donde eta el error del llenado
        //realiza un posicioamiento al elemento del formulario
        //formulario.nombre.focus();
        contenido("nombre").value.focus();
        return false;
    }

    var checkOk = "QWERTYUIOPASDFGHJKLÑZXCVBNM" + "qwertyuiopasdfghjklñzxcvbnm"
        //var checkString = formulario.nombre.value;
    var checkString = contenindo("nombre").value;

    alert(checkString);

    var allValid = true;

    for (var i = 0; i < checkString.length; i++) {
        //chekAt nos ayuda a separar una cadena de caracteres
        //por ejemplo ana como cadena en char sera A N A
        var ch = checkString.charAt(i);
        for (var j = 0; j < checkOk.length; j++)
            if (ch == checkOk.charAt(i))
                break;
        if (j == checkOk.length) {
            allValid = false;
            break;
        }

    }

    //debo saber el estado del allvalid
    if (!allValid) {
        alert("Escriba solo letras en el campo de nombre");
        formulario.nombre.focus();
        return (false);
    }

    //formulario edad
    if (formulario.edad.value.length < 2) {
        alert("Escriba maximo dos digitos, o la maxima edad de 99");
        //focus nos auida a focalizar donde eta el error del llenado
        //realiza un posicioamiento al elemento del formulario
        formulario.edad.focus();
        return false;
    }

    var checkOk = "123456789";
    var checkString = formulario.edad.value;

    alert(checkString);

    var allValid = true;
    //debo saber si edad es all
    if (!allValid) {
        alert("Escriba solo numeros en el campo numerico");
        formulario.edad.focus();
        return (false);
    }

    //correo

    if (formulario.correo.value.length < 5) {
        alert("Escriba el correo con el formato xxx.xxx.x");
        //focus nos auida a focalizar donde eta el error del llenado
        //realiza un posicioamiento al elemento del formulario
        formulario.correo.focus();
        return false;
    }

    var txt = formulario.correo.value;
    //expresion regular
    // var b = /^[^@\s]+@[^@\.\s]+(\.[^@\.\s]+)+$/
    var b = /\w+@\w+\.+[a-z]/;
    //ejemplo@ejemplo
    //ejemplo@ejemplo.ejemplo
    //todo lo que esta adentro de los corchetes es la expresion
    //existen cadenas para creacion de curp
    //para una llave compartida de sssdddpdf

    alert("Email " + (b.test(txt) ? "" : "no") + "valido")
        //si b.test(txt) "" es verdadero : sino el "no" es el falso

    //FORMULARIO DE FECHA

    //FORMULARIO DIA
    if (formulario.d.value.length < 2 || formulario.d.value > 31) {
        alert("Escriba por lo menos 2 digitos");
        //focus nos auida a focalizar donde eta el error del llenado
        //realiza un posicioamiento al elemento del formulario
        formulario.d.focus();
        return false;
    }

    var checkOk = "123456789"
    var checkString = formulario.d.value;

    alert(checkString);

    var allValid = true;

    if (!allValid) {
        alert("Escriba solo numeros en el campo numerico");
        formulario.d.focus();
        return (false);
    }

    if (checkString);

    //FORMULARIO MES
    if (formulario.m.value.length < 2 || formulario.m.value > 13) {
        alert("Escriba por lo menos 2 digitos para el mes y no mayor a 12");
        //focus nos auida a focalizar donde eta el error del llenado
        //realiza un posicioamiento al elemento del formulario
        formulario.m.focus();
        return false;
    }

    var checkOk = "123456789"
    var checkString = formulario.m.value;

    alert(checkString);

    var allValid = true;

    if (!allValid) {
        alert("Escriba solo numeros en el campo numerico");
        formulario.m.focus();
        return (false);
    }

    if (checkString);

    //FORMULARIO AÑO
    if (formulario.a.value.length < 4) {
        alert("Escriba por lo menos 4 digitos para el año");
        //focus nos auida a focalizar donde eta el error del llenado
        //realiza un posicioamiento al elemento del formulario
        formulario.a.focus();
        return false;
    }

    var checkOk = "123456789"
    var checkString = formulario.a.value;

    alert(checkString);

    var allValid = true;

    if (!allValid) {
        alert("Escriba solo numeros en el campo numerico");
        formulario.a.focus();
        return (false);
    }

    if (checkString);


}

//calculando años bisiesto y reglas para los meses

function fechas() {
    var dia = getElementByid("d").value;
    var mes = getElementByid("m").value;
    var year = getElementByid("a").value;

    if (mes == 01 || mes == 03 || mes == 05 || mes == 07 || mes == 08 || mes == 10 || mes == 12) {
        dia < 32;
    } else if (mes == 04 || mes == 06 || mes == 09 || mes == 11) {
        dia < 31;
    } else if (mes == 02) {
        dia < 28;
    } else if (dia < 1) {
        alert("dia no existente");
    } else if ((year % 4 == 0) && (year % 100 != 0 || year % 400 == 0)) {
        alert("el año" + year + "es bisiesto");
        if (mes == 2 || mes == 02)
            dia + 1;
    } else {
        alert("el año" + year + "no es bisiesto");
    }
}

//id
function contenido(id) {
    return document.getElementById(id);
}
//porcentaje masculino/femenino
function calcular() {
    var h = parseInt(contenido("masculino").value);
    var m = parseInt(contenido("femenino").value);

    var total = h + m;
    //var porcentaje_hombre = total / h * 100;
    //var porcentaje_mujeres = total / m * 100;

    var porcentaje_hombre = h / total * 100;
    var porcentaje_mujeres = m / total * 100;

    contenido("h_porcentaje").innerHTML = porcentaje_hombre.toFixed(0) + "%";
    contenido("m_porcentaje").innerHTML = porcentaje_mujeres.toFixed(0) + "%";
}
//Calcular edad
function calcularEdad() {
    var fecha_Nacimiento = parseInt(contenido("date").value);
    var fecha_Actual = new Date();
    var a = fecha_Actual.getFullYear() - fecha_Nacimiento;

    //fecha_Nacimiento.setFullYear(fecha_Actual.getFullYear());

    if (fecha_Actual.getFullYear() < fecha_Nacimiento) {
        --a;
        contenido("edad").innerHTML = a;
        //console.log(a);
    }
    contenido("edad").innerHTML = a;

}