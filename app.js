"use strict"

class Cotizador {
    constructor(nombre, valor) {
        this.nombrePlan = nombre;
        this.valorPlan = parseFloat(valor.replace(',', '.'));
    }
    verValorCLP(UF) {
        return this.valorPlan * parseFloat(UF);
    }
}

function obtenerUF() {
    var url = "https://api.cmfchile.cl/api-sbifv3/recursos_api/uf/?apikey=ee6a726a519cdb8f0c1ba1a6f1b42394314eab2e&formato=json"
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var data = xhr.responseText;
            var json = JSON.parse(data);
            var valorUF = json.UFs[0].Valor;
            valorUF = valorUF.replace('.', '');
            valorUF = valorUF.replace(',', '.');

            var cotizacion = new Cotizador(document.getElementById("plan").value, document.getElementById("valorUf").value);
            document.getElementById("resultado").innerHTML = cotizacion.verValorCLP(valorUF);
        }
    }
    xhr.open("get", url)
    xhr.send();
}