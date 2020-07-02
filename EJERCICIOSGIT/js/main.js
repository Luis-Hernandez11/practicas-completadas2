function invertir() {
    var p1_input = document.querySelector('#p1-input').value;

    var p1_array = p1_input.split('').reverse();
    var p1_res = '';

    p1_array.forEach(function(palabra, i) {
        if (i != 0 || i != p1_array.length) p1_res += '';
        p1_res += palabra;
    });
    document.querySelector('#p1-output').textContent = p1_res;
}

/*function invertir() {
    var palabra = document.getElementById('p1-input').value;
    var cadenarevertida = "";

    for (var i = palabra.length - 1; i >= 0; i--) {
        cadenarevertida += palabra[i];
    }
    console.log(cadenarevertida);

    document.getElementById('p1-output').innerHTML = cadenarevertida;

}*/

function problema2() {
    var p2_x1 = document.querySelector('#p2-x1').value;
    var p2_x2 = document.querySelector('#p2-x2').value;
    var p2_x3 = document.querySelector('#p2-x3').value;
    var p2_x4 = document.querySelector('#p2-x4').value;
    var p2_x5 = document.querySelector('#p2-x5').value;
    var p2_y1 = document.querySelector('#p2-y1').value;
    var p2_y2 = document.querySelector('#p2-y2').value;
    var p2_y3 = document.querySelector('#p2-y3').value;
    var p2_y4 = document.querySelector('#p2-y4').value;
    var p2_y5 = document.querySelector('#p2-y5').value;

    var v1 = [p2_x1, p2_x2, p2_x3, p2_x4, p2_x5];
    var v2 = [p2_y1, p2_y2, p2_y3, p2_y4, p2_y5];

    v1 = v1.sort(function(a, b) {
        return b - a;
    });
    //ordenando los vectores para realizar la operacion
    v2 = v2.sort(function(a, b) {
        return b - a;
    });
    //inverti
    v2 = v2.reverse();

    //realizando el producto escalar
    var p2_producto = 0;
    for (var i = 0; i < v1.length; i++) {
        p2_producto += v1[i] * v2[i];
    }

    document.querySelector('#p2-output').textContent = 'Productor escalar minimo' + p2_producto;
}

function problema3() {
    var alfabeto = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Ñ', 'Z', 'X', 'C', 'V', 'B', 'N', 'M'];

    var p3_input = document.querySelector('#p3-input').value;
    var p3_palabra = p3_input.split(',');

    p3_palabra = p3_palabra.map(function(palabra) {
        return palabra.replace(/\s/g, '').toUpperCase();
    });

    var p3_res = '';
    //iterar dentro de la palabra
    p3_palabra.forEach(function(palabra, i) {
        //separar la palabra actual del array y vamos a obtener lo que hay en dicha palabra
        var lectras_unicas = [];
        var palabra_array = palabra.split('');
        //iteramos por el alfabeto
        alfabeto.forEach(function(letra, j) {
            //iteramos sobre la palabra
            palabra_array.forEach(function(letra_palabra, k) {
                //comprobar si palabra esta dentro del alfabeto
                if (letra_palabra == letra) {
                    //si la letra no la hemos encontrado la agregamos al array para contar las letras unicas
                    if (lectras_unicas.indexOf(letra) < 0) {
                        lectras_unicas.push(letra);
                    }
                }
            });
        });
        p3_res += 'Palabra' + palabra + ' = ' + 'Letras unicas ' + lectras_unicas.length + '\n';
    });

    document.querySelector('#p3-output').textContent = p3_res;
}