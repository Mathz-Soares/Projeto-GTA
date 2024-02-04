const botao = document.querySelector(".botao");
const plataformas = document.querySelector(".botao .plataformas");
botao.addEventListener("click", () =>{
    const botaoAberto = plataformas.classList.contains("ativo");
    plataformas.classList.toggle("ativo")
});