
let contador = 0;

const contadorSpan = document.getElementById("contador-carrinho");
const botoesComprar = document.querySelectorAll(".btn-comprar");

botoesComprar.forEach(botao => {
  botao.addEventListener("click", () => {
    contador++;
    contadorSpan.textContent = contador;

    alert("✅ Produto adicionado ao carrinho!");
  });
});