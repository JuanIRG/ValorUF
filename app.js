"use strict"



function obtener() {
    var url = "https://api.cmfchile.cl/api-sbifv3/recursos_api/uf/?apikey=ee6a726a519cdb8f0c1ba1a6f1b42394314eab2e&formato=json"
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var data = xhr.responseText;
            var json = JSON.parse(data);
            console.log("Peticion Finalizada", data);
            console.log(json.UFs[0].Valor);
            div.innerHTML = json.UFs[0].Valor;
            // return json.UFs[0].Valor

        }
    }

    xhr.open("get", url)
    xhr.send();
}

const VALORUF = 30000;

class Cotizador {
    constructor(nombre, valor) {
        this.nombrePlan = nombre;
        this.valorPlan = valor;
    }
    verValorCLP() {
        var resultado = this.valorPlan * VALORUF;
        return resultado;
    }
}

function crearCotizacion() {
    var cotizacion = new Cotizador(document.getElementById("plan").value, document.getElementById("valorUf").value)
    document.getElementById("resultado").innerHTML = cotizacion.verValorCLP()

}