function carregar () {
    var msg = window.document.querySelector('div#msg')
    var img = window.document.querySelector('img#imagem')
    var data = new Date()
    var hora = data.getHours()
    
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        img.src = 'imagens/fotomanha.jpg'

        document.body.style.background = '#0487D9'

    } else if (hora >= 12 && hora < 18) {
        img.src = 'imagens/fototarde.jpg'
        document.body.style.background = '#F25C05'

    } else {
        img.src = 'imagens/fotonoite.jpg'

        document.body.style.background = '#494859'
    }

    } 

