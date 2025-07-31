function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('div#iano')
    var res = document.querySelector('div#res')

    if(fano.ariaValueMax.length == 0 || Number(fano.value) > ano) {
        alert('[Erro] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByTagName('radsex')
        var idade = ano - Number(fano.value)
    }
}