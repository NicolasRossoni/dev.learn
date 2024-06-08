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

let form_dois = document.getElementById("form_dois");
let cor_inp = document.getElementById("cor_inp");

form_dois.addEventListener("submit", function(event){
    event.preventDefault();
    document.querySelector('#resultado2').style.color = cor_inp.value
})

// ----------- Exercício 3 ----------- //
let people = [];

function createPerson(nome, idade, peso) {
    let person = {
        nome: nome,
        idade: idade,
        peso: peso,
        add_to_people: function(){
            people.push(this);
            updateTable();
        }
    }
    person.add_to_people();
}

function updateTable() {
    const tableBody = document.getElementById('complete_table').getElementsByTagName('tbody')[0];
    tableBody.innerHTML = '';

    people.forEach(person => {
        let row = tableBody.insertRow();
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);

        cell1.textContent = person.nome;
        cell2.textContent = person.idade;
        cell3.textContent = person.peso;
    });
}

createPerson("Big Nick", "20", "250");

let form_tres = document.getElementById("form_tres");
let nome = document.getElementById("nome");
let idade = document.getElementById("idade");
let peso = document.getElementById("peso");

form_tres.addEventListener("submit", function(event){
    event.preventDefault();
    if (nome.value !== "" && idade.value !== "" && peso.value !== "") {
        createPerson(nome.value, idade.value, peso.value);
    } else {
        alert("Preencha todos os espaços!");
    }
});



