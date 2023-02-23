// Defina um array de produtos com nome, imagem e preço
const products = [
  { name: "Produto 1", image: "produto1.jpg", price: "R$ 100,00" },
  { name: "Produto 2", image: "produto2.jpg", price: "R$ 200,00" },
  { name: "Produto 3", image: "produto3.jpg", price: "R$ 300,00" },
  { name: "Produto 4", image: "produto4.jpg", price: "R$ 400,00" },
  { name: "Produto 5", image: "produto5.jpg", price: "R$ 500,00" }
];

// Embaralhe os produtos para escolher aleatoriamente
function shuffle(array) {
  let currentIndex = array.length;
  let temporaryValue, randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

// Obtenha um subconjunto aleatório de produtos
const randomProducts = shuffle(products).slice(0, 3);

// Crie a prévia de produto para cada produto aleatório
const productPreviewContainer = document.querySelector(".product-preview-container");

randomProducts.forEach(product => {
  const productPreview = `
    <div class="product-preview">
      <a href="produtos.html">
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.price}</p>
      </a>
    </div>
  `;
  productPreviewContainer.insertAdjacentHTML("beforeend", productPreview);
});
