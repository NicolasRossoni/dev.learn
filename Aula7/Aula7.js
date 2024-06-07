// ----------- Exercício 1 ----------- //

let cilindro = {
    raio: null,
    altura: null,
    volume: null,
    calcular_volume: function(){
        cilindro.volume = (this.raio**2)*Math.PI*this.altura;
    }
}

let form_um = document.getElementById("form_um");
let raio_inp = document.getElementById("raio_inp");
let altura_inp = document.getElementById("altura_inp");

form_um.addEventListener("submit", function(event){
    event.preventDefault();
    cilindro.raio = parseFloat(raio_inp.value);
    cilindro.altura = parseFloat(altura_inp.value);
    cilindro.calcular_volume();
    document.querySelector('#resultado1').innerText = "Volume: "+Math.round(cilindro.volume * 100) / 100;
});

// ----------- Exercício 2 ----------- //


// ----------- Exercício 3 ----------- //

