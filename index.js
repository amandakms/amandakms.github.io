console.log("Hello Word");

//Arvore de Natal
const num_linhas = 10;

for(let i = 0; i < num_linhas; i++) {
    let espacos = " ".repeat(num_linhas - i)
    let conteudo = 'x'.repeat(i);
    console.log(espaco + conteudo +'x' + conteudo);
}

console.log(' '.repeat(num_linhas)+ 'x' + '\n'.repeat(4));
