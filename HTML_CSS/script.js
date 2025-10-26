console.log('o javaScript foi carregado!');
document.addEventListener('DOMContentLoaded',()=>{
    const containerprincipal = document.querlySelector('.container-principal');
    const btnAdicionar = document.querySelector ('#btn-adicionar-cartao')

if(containerprincipal && btnAdicionar){
btnAdicionar.addEventListener('click', ()=>{
    const novoCartao = document.createElement ('article');
    novoCartao.classList.add('cartao');
        novoCartao.innerHTML = `
            <h2>Novo Artigo</h2>
            <p> Este é um novo artigo adicionado dinamicamente.</p>
        `;
            containerprincipal.appendChild(novoCartao);});
}
});