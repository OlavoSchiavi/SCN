function pesquisar() {
    var idDigitado = document.getElementById("caixaDePesquisa").value.toLowerCase();
    var elementos = document.querySelectorAll("[id]");

    var encontrado = false;

    elementos.forEach(function(elemento) {
        var idElemento = elemento.id.toLowerCase();
        if (idElemento.includes(idDigitado)) {
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