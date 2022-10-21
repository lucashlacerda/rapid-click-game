
function start(){
    setTimeout(()=>{
        const bola = document.createElement('div');
        bola.classList.add('ball');
        bola.style.left = geraNumAleatorio();
        bola.style.top = geraNumAleatorio();
        bola.setAttribute("onclick", "estourar(this)");
        document.body.appendChild(bola);
        start();
    }, 500)
}

function geraNumAleatorio(){
    return `${Math.ceil(Math.random() * 500)}px`
}

function estourar(element){
document.body.removeChild(element);
}
start();