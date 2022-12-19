/*
const meuPedido = { 
    itens: [
        { nome: 'Poção de vida', valor: 100 },
        { nome: 'Espada de prata', valor: 200 },
        { nome: 'Entrega', valor: 40, entrega: true}
    ]
}*/

const acrescimoValorEntrega = 0.2;

const calcularValorPedido = pedido => {
    const valorProdutos = pedido.itens
    .filter(item => !item.entrega) //!diferente
    .reduce((totalPedidos, pedidoAtual) => totalPedidos + pedidoAtual.valor, 0)

    const entrega = pedido.itens.filter(item => item.entrega)

    if(pedido.estado === 'RS' || pedido.estado === 'SC'){
        const acrescimoEntrega = entrega[0].valor * acrescimoValorEntrega;
        entrega[0].valor += acrescimoEntrega;
    }

    //usando operador ternario
    return(valorProdutos > 500) ? valorProdutos : valorProdutos + entrega[0].valor;

    /*
    if(valorProdutos > 500){
        return valorProdutos
    }else {
        return valorProdutos + entrega[0].valor
    }*/
}

module.exports = calcularValorPedido;

//pedido.itens.reduce((totalPedidos, pedidoAtual) => totalPedidos + pedidoAtual.valor, 0)

//console.log(calcularValorPedido(meuPedido)) 

//quanto mais cedo fizer o teste melhor, quando a função ainda esta simples

