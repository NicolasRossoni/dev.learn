function cor_azul() {
    document.querySelectorAll('.content-grid, .general-title-box').forEach(element => {
        element.style.backgroundColor = 'lightblue';
    });
    document.querySelector('.title').textContent = 'Hmmmmmm...';
}

function cor_vermelho() {
    document.querySelectorAll('.content-grid, .general-title-box').forEach(element => {
        element.style.backgroundColor = 'lightcoral';
    });
    document.querySelector('.title').textContent = 'Delicious!';
}

function cor_amarelo() {
    document.querySelectorAll('.content-grid, .general-title-box').forEach(element => {
        element.style.backgroundColor = 'lightgoldenrodyellow';
    });
    document.querySelector('.title').textContent = 'Yummy!!';
}
