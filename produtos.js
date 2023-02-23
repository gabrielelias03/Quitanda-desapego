// Objeto "carrinho" que irá armazenar os produtos selecionados
var carrinho = {
  produtos: []
};

// Função para adicionar um produto ao carrinho
function adicionarAoCarrinho(nome, preco) {
  // Verifica se o produto já está no carrinho
  var produtoIndex = carrinho.produtos.findIndex(function(produto) {
    return produto.nome === nome;
  });

  // Se o produto já está no carrinho, adiciona uma unidade a sua quantidade
  if (produtoIndex !== -1) {
    carrinho.produtos[produtoIndex].quantidade++;
  } else {
    // Se o produto não está no carrinho, adiciona um novo objeto ao array
    carrinho.produtos.push({
      nome: nome,
      preco: preco,
      quantidade: 1
    });
  }

  // Exibe uma mensagem de confirmação para o usuário
  alert("Produto adicionado ao carrinho!");
}

// Função para exibir o carrinho na tela
function verCarrinho() {
  var total = 0;
  var mensagem = "Produtos no carrinho:\n";

  // Percorre o array de produtos no carrinho e adiciona-os à mensagem
  carrinho.produtos.forEach(function(produto) {
    mensagem += produto.nome + " - Quantidade: " + produto.quantidade + " - Preço: R$" + produto.preco.toFixed(2) + "\n";
    total += produto.preco * produto.quantidade;
  });

  // Adiciona o valor total ao final da mensagem
  mensagem += "Valor total: R$" + total.toFixed(2);

  // Exibe a mensagem com os produtos e valor total
  alert(mensagem);
}
