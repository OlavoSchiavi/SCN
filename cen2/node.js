function pesquisar() {
    var idDigitado = document.getElementById("caixaDePesquisa").value.toLowerCase(); // Convertendo para minúsculas
    var elementos = document.querySelectorAll("[id]"); // Seleciona todos os elementos com ID

    var encontrado = false;

    elementos.forEach(function(elemento) {
        var idElemento = elemento.id.toLowerCase(); // Convertendo o ID do elemento para minúsculas
        if (idElemento.includes(idDigitado)) { // Verifica se o ID contém a sequência digitada
            encontrado = true;
            elemento.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });

    if (!encontrado) {
        alert("ID não encontrado!");
    }
}



function toggleBloco(elemento) {
    var blocos = document.querySelectorAll('.bloco');

    blocos.forEach(function(bloco) {
        if (bloco === elemento && !bloco.classList.contains('active')) {
            bloco.classList.add('active');
        } else {
            bloco.classList.remove('active');
        }
    });
}