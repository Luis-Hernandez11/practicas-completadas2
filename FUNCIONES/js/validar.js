function validarn(e) {

    //if (teclado == 8) return true;
    var teclado = (document.all) ? e.keyCode : e.which;
    if (teclado == 8) return true;
    var patron = /[0-9\d .]/;
    //var patron = /([0-9\d]{2,3})\.([0-9\d]{3})/;
    var tec = String.fromCharCode(teclado);
    return patron.test(tec);
}

function interes() {

    var valor = document.formulario.cantidad.value;
    var result = parseInt(valor);

    if (result >= 1) {
        var interes = result * 0.02;
        var total = result + interes;
        document.formulario.sueldoti.value = "$" + total;
    } else {
        alert("No es positivo");
    }
}

function borrar() {
    document.formulario.cantidad.value = "";
    document.formulario.sueldoti.value = "";
}

/*function decimales() {
    var caracter = document.formulario.cantidad.value;
    var k = String.fromCharCode('');
    var busqueda = str.find(str => str == ".");

    if (k >= 46 && k <= 57) {
        if (k === 46) {
            var str = caracter.toString();
            var largo = caracter.lenght;
            for (var i = 0; i < largo; i++) {
                if (busqueda)
                    busqueda.replace(".", "");

            }
        }
    }
}*/

/*function puntos() {
    var caracter = document.formulario.cantidad.value;
    var largo = caracter.lenght;
    var str = caracter.toString();
    var punto = 0;
    var cont;
    var caracterPunto = String.fromCharCode(46);
    var caracterPunto2 = String.fromCharCode(48);
    var caracterPunto3 = String.fromCharCode(57);
    var str2;

    for (i = 0; i < largo; i++) {
        cont = str.substring(i, 1);
        if (cont != "")
            if (cont == caracterPunto) {
                punto = punto + 1;
                if (punto > 1) {
                    var texto = srt.replace(caracterPunto, "");
                    return punto() = texto;
                    punto = 0;
                } else {
                    if (caracter < caracterPunto2 || caracter > caracterPunto3) {
                        texto = str2.replace(caracter, "")
                    }
                }
            }
    }


}*/