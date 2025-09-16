function clicou() {
    var inicio = document.querySelector('input#iinicio')

    var fim = document.querySelector('input#ifim')

    var passo = document.querySelector('input#ipasso')

    var res = document.querySelector('p#res')

    if (inicio == "" || fim == "" || passo == "") {
        res.innerHTML = "Impossível contar!";
    }
}