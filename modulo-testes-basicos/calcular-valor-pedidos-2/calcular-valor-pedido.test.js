//testando unidade, testanto cada trecho de código
const calcularValorPedido = require('./calcular-valor-pedido');
// AAA - ARRANGE, AÇÃO e ASSERT 3 passos de criação de um teste

/*it('dev rodar teste', ()=> {
    expect(true).toBe(true)
})*/

// ARRANGE - ARRUMAR - O OBJETO DE TESTE
it('não deve cobrar valor de frete quando o valor dos produtos for superior a 500', ()=> {
    const meuPedido = { 
        itens: [
            { nome: 'Arco encantado', valor: 2000 },
            { nome: 'Entrega', valor: 100, entrega: true}
        ]
    }

    //ACT AÇÃO - O QUE VAI SER TESTADO
    const resultado = calcularValorPedido(meuPedido)

    // ASSERT - ASSERÇÂO - QUAL O RESULTADO ESPERADO
    expect(resultado).toBe(2000)
})

//testando valor menor do que 500
it('deve cobrar valor de frete quando o valor do produto for menor do que R$500,00', ()=> {
    //ARRANGE
    const meuPedido = { 
        itens: [
            { nome: 'Sanduíche', valor: 50 },
            { nome: 'Entrega', valor: 100, entrega: true}
        ]
    };

    //ACT ACTION
    const resultado = calcularValorPedido(meuPedido)

    // ASSERT
    expect(resultado).toBe(150)
});

//se o valor for exatamente 500
it('O valor do produto deu exatamente 500 mangos, cobrar frete', ()=> {
    // ARRANGE
    const meuPedido = { 
        itens: [
            { nome: 'mini-galaxy', valor: 500 },
            { nome: 'Entrega', valor: 100, entrega: true}
        ]
    };

    // ACT
    const resultado = calcularValorPedido(meuPedido)

    // ASSERT -- rsultado esperado
    expect(resultado).toBe(600)
})

//Usando TDD
/*CASO OS ESTADOS DE ENTREGA SEJAM RS OU SC, DEVE SER ACRESCIDO UM VALOR DE 30% NA ENTREGA */
it('deve adicionar um acrescimo de 20% no valor da entrega do pedido caso o estado seja RS', ()=> {
    //ARRANGE
    const pedidoComEstadoRS = {
        estado: 'RS',
        itens: [
            { nome: 'mini-galaxy', valor: 500 },
            { nome: 'Entrega', valor: 100, entrega: true}
        ]
    };
    //ACT
    const resultado = calcularValorPedido(pedidoComEstadoRS)

    //ASSERT
    expect(resultado).toBe(620)
})

it('deve adicionar um acrescimo de 20% no valor da entrega do pedido caso o estado seja SC', ()=> {
    //ARRANGE
    const pedidoComEstadoSC = {
        estado: 'SC',
        itens: [
            { nome: 'mini-galaxy', valor: 500 },
            { nome: 'Entrega', valor: 100, entrega: true}
        ]
    };
    //ACT
    const resultado = calcularValorPedido(pedidoComEstadoSC)

    //ASSERT
    expect(resultado).toBe(620)
})

//passando outro estado que não seja SC ou RS
it('não deve adicionar um acrescimo de 20% no valor da entrega do pedido caso o estado seja SP', ()=> {
    //ARRANGE
    const pedidoComEstadoSP = {
        estado: 'SP',
        itens: [
            { nome: 'mini-galaxy', valor: 500 },
            { nome: 'Entrega', valor: 100, entrega: true}
        ]
    };
    //ACT
    const resultado = calcularValorPedido(pedidoComEstadoSP)

    //ASSERT
    expect(resultado).toBe(600)
})


//tem de termninar com test o arquivo
/*test('teste funcionou', () => {
    expect(true).toBe(true)
});*/

//recomendavel usar it
/*it('should run test', () => {

    // assertion ou asserção
    expect(true).toBe(true)
});*/