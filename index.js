function tocaSom(idAudio){
    const elemento = document.querySelector(idAudio);
    if(elemento === null){
        alert('Elemento não encontrado ou seletor inválido');
    }
    if(elemento.localName === 'audio' && elemento){
        elemento.play();
    }else{
        alert('Elemento não encontrado ou seletor inválido');
    }
    
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for(let contador = 0; contador < listaDeTeclas.length; contador++){

    const tecla = listaDeTeclas[contador];
    const som = tecla.classList[1];
    const idAudio = `#som_${som}`;

    tecla.onclick = () => {
        tocaSom(idAudio);
    }

    tecla.onkeydown = (evento) => {
        if(evento.code === 'Enter' || evento.code === 'Space'){
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = () => {
        tecla.classList.remove('ativa');
    }

}
