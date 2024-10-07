const dadosTabela = [ // Exemplo de como adicionar os dados no código
    ['Produto A', '10/02/2025', '$10', '$9', '100', '$8'],
    ['Produto B', '15/01/2025', '$15', '$14', '50', '$12'],
    ['Produto C', '02/10/2025', '$20', '$18', '200', '$15'],
    ['', '', '', '', '', ''], // Linha vazia para teste
    ['Produto D', '20/03/2025', '$25', '$22', '75', '$20']
];

function gerarTexto(dadosTabela) {
    return dadosTabela.map(row => {
        const produto = row[0] || ''; // Coluna A (PRODUTO)
        const validade = row[1] || ''; // Coluna B (VALIDADE)
        const valorVenda = row[2] || ''; // Coluna C (VALOR VENDA)
        const quantidadeProduto = row[4] // Coluna E (QUANTIDADE DE PRODUTOS)
        const precoPromocional = row[5] || ''; // Coluna F (PREÇO PROMOCIONAL)

        if (produto && valorVenda && quantidadeProduto !=='0' && precoPromocional) {
            return `${produto} - de ${valorVenda} por ${precoPromocional}\nValidade: ${validade}`;
        }

        return null; // Se o if não acontecer, retorna uma linha 'null';

    }).filter(text => text !== null); // Remove as linhas 'null';
}


const textoValidades = gerarTexto(dadosTabela);
console.log(textoValidades.join('\n\n'));