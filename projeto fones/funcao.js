const azul = document.querySelector(".ft-azul")
const branco = document.querySelector('.ft-branco')
const preto = document.querySelector('.ft-preto')
const fotogrande = document.querySelector(".grande1")
const dinheiro = document.querySelector(".valor")

function botaoazul(){
     fotogrande.src = "product1.png"
     
     dinheiro.innerHTML = "R$ 210,00"
}

function botaobranco(){
    fotogrande.src = "product2.png"
    dinheiro.innerHTML = "R$ 299,00"
}

function botaopreto(){
    fotogrande.src = "product3.png"
    dinheiro.innerHTML = "R$ 329,99"
}












azul.addEventListener('click' , botaoazul)
branco.addEventListener('click', botaobranco)
preto.addEventListener('click', botaopreto)