const produtos = [
    {nome: 'coxinha', preco:'4.0'},
    {nome: 'pastel', preco:'3.0'},
    {nome: 'suco', preco:'2.0'}
];

let exibirProduto = (p,i) => {
    console.log (i + '- ' + p.nome + 'R$' + p.preco.toFixed(2));
};

console.log("Todos os produtos")
produtos.forEach(exibirProduto);

console.log("\n Produtos de menos de 3.0 reais")
produtos.filter(p=>p.preco<3).forEach(exibirProduto);

console.log("\n Aumento de 20% em todos os produtos")
produtos.map (p=>{
 return {
     nome : p.nome,
     preco: p.preco *=1.2
 }
}).forEach(exibirProduto);
