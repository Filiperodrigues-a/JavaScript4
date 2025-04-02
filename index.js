const mudaTitulo = (novoTitulo) => {
    const titulo = document.getElementById('titulo-principal');
    titulo.innerText = novoTitulo
}
const botao = getElementsByTagName('button')[0]

setTimeout(() => mudaTitulo('Oba! Alterei o título'), 2000);
    botao = {
        innerText: 'Clique com o novo texto',
        style: {
            fontsize: '60px'
        }
    }
const listaDeLi = document.getElementsByTagName('li')
const listaDeCores = ['#d60000', '#05f7ab']
const listaDeParagrafos = document.getElementsByTagName('p')

for(let paragrafo of listaDeParagrafos) {
    paragrafo.classList = 'paragrafo'
}

for(let li in listaDeLi) {
    console.log(listaDeLi[li])
    listaDeLi[li].style.color = listaDeCores[li]
}



setTimeout