// contador do carrinho
let totalItens = 0;

const botoesComprar = document.querySelectorAll(".btn-comprar");

const contadorCarrinho = document.querySelector(".contador-carrinho");

botoesComprar.forEach((botao) => {
  botao.addEventListener("click", () => {
    totalItens++;

    contadorCarrinho.textContent = totalItens;

    alert("✅ Produto adicionado ao carrinho!");
  });
});

/* filtro de produtos por categoria att2.0 oficial*/
const filtros = document.querySelectorAll(".filtros a");
const produtos = document.querySelectorAll(".produto");

filtros.forEach(filtro => {
  filtro.addEventListener("click", (e) => {
    e.preventDefault();

    const categoria = filtro.getAttribute("data-filter");

    produtos.forEach(produto => {
      if (categoria === "todos" || produto.dataset.category === categoria) {
        produto.style.display = "block";
      } else {
        produto.style.display = "none";
      }
    });
  });
});




