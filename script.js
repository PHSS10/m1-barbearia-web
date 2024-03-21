const barbearia = {
    cortes: [
        
        { id: 1, tipo: "Militar", valor: 20 },
        { id: 2, tipo: "Samurai", valor: 35 },
        { id: 3, tipo: "Pompadour", valor: 20 },
        { id: 4, tipo: "Moicano", valor: 10 },
        { id: 5, tipo: "Razor part", valor: 5 },
    ],
  
    barbas: [
        
        { id: 1, tipo: "Capitão Jack", valor: 20 },
        { id: 2, tipo: "Van Dyke", valor: 20 },
        { id: 3, tipo: "Barba Média", valor: 20 },
        { id: 4, tipo: "Barba Baixa", valor: 20 },
        { id: 5, tipo: "Barba Zero", valor: 15 },
    ],
    estaAberto: true,
};
  
  
function buscaCortePorId(codigoCorte) {
    let corte = barbearia.cortes;
    for(let i = 0; i < corte.length; i ++ ){

        if(codigoCorte == corte[i].id){

            return corte[i];
        } 
    }
    
    return "corte não encontrado";   
}
console.log(buscaCortePorId(3))

function buscaBarbaPorId(codigoBarba) {
    let barba = barbearia.barbas;
    for(let j = 0; j < barba.length; j ++ ){

        if(codigoBarba == barba[j].id){

            return barba[j];
        } 
    }
    
    return "barba não encontrada";
}
console.log(buscaBarbaPorId(3))

function verificaStatusBarbearia() {
    let status = barbearia.estaAberto
    if(status){
        return "Estamos abertos"
    }
    else{

        return "Estamos fechados"
    }
}
console.log(verificaStatusBarbearia())


function retornaTodosCortes() {
    let todosCortes =[]; 
    for(let k = 0; k < barbearia.cortes.length; k ++){
       
        todosCortes.push(barbearia.cortes[k])
    }
    return todosCortes ;

}
console.log(retornaTodosCortes())

function retornaTodasBarbas() {
    let todasBarbas =[]; 
    for(let p = 0; p < barbearia.barbas.length; p ++){
       
        todasBarbas.push(barbearia.barbas[p]);
    }
    return todasBarbas ;
}
console.log(retornaTodasBarbas())



function criaPedido(nomeCliente, corteId, barbaId) {
    let pedidos = {
        nome : nomeCliente,
        pedidoCorte : buscaCortePorId(corteId).tipo,
        pedidoCortePreco : buscaCortePorId(corteId).valor,
        pedidoBarba : buscaBarbaPorId(barbaId).tipo,
        pedidoBarbaPreco : buscaBarbaPorId(barbaId).valor
    }

    return pedidos;
}
console.log(criaPedido("Pedro", 5, 1))


function atualizarServico(lista, id, valor, tipo) {
    for(let l = 0; l < lista.length; l++) {
        if (lista[l].id === id) {
            lista[l].valor = valor;
            lista[l].tipo = tipo;
            return lista; 
        }
    }
    
    return lista;
}
console.log(atualizarServico(barbearia.cortes, 5,50,"Ronaldinho"))

function calculaTotal(pedido) {

    let soma = pedido.pedidoCortePreco + pedido.pedidoBarbaPreco;
    return soma
}
console.log(calculaTotal(criaPedido("pedro",2,2)))


