function adicionar() {
    let num = document.getElementById('inum')
    let tab = document.getElementById('ivalor')

    if(num.value >= 100 || num.value.length == 0) {
        alert("Valor inválido ou já definido")
    }
}