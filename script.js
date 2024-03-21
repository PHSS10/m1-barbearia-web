const barbearia = {
    cortes: [
        {},
        { id: 1, tipo: "Militar", valor: 20 },
        { id: 2, tipo: "Samurai", valor: 35 },
        { id: 3, tipo: "Pompadour", valor: 20 },
        { id: 4, tipo: "Moicano", valor: 10 },
        { id: 5, tipo: "Razor part", valor: 5 },
    ],
  
    barbas: [
        {},
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
    for(i = 0; i < corte.length; i ++ ){

        if(codigoCorte == corte[i].id){

            return corte[codigoCorte];
        } 
    }
    
    return "corte não encontrado";   
}

function buscaBarbaPorId(codigoBarba) {
    let barba = barbearia.barbas;
    for(j = 0; j < barba.length; j ++ ){

        if(codigoBarba == barba[j].id){

            return barba[codigoBarba];
        } 
    }
    
    return "Barba não encontrado";
}

function verificaStatusBarbearia() {
    let status = barbearia.estaAberto
    if(status){
        return "Estamos aberto"
    }{
        return "Estamos fechados"
    }
}


function retornaTodosCortes() {
    let todosCortes =[]; 
    for(k = 0; k < barbearia.cortes.length; k ++){
       
        todosCortes.push(barbearia.cortes[k])
    }
    return todosCortes 

}
console.log(retornaTodosCortes())

function retornaTodasBarbas() {
    let todasBarbas =[]; 
    for(l = 0; l < barbearia.barbas.length; l ++){
       
        todasBarbas.push(barbearia.barbas[l])
    }
    return todasBarbas 
}
console.log(retornaTodasBarbas())

function criaPedido(nomeCliente, corteId, barbaId) {
    let pedido = {
        nome : nomeCliente,
        pedidoCorte : buscaCortePorId(corteId),
        pedidoCortePreco : barbearia.cortes[i].valor,
        pedidoBarba : buscaBarbaPorId(barbaId),
        pedidoBarbaPreco : barbearia.barbas[j].valor
    }

    return pedido
}


function atualizarServico(lista, id, valor, tipo) {
    let listaAtualizada = [];
    for(l = 0; l < barbearia.cortes.length;l ++){
        lista[id].valor = valor
        lista[id].tipo = tipo

        listaAtualizada.push(lista,lista[id],tipo, valor)
        
        return listaAtualizada
    }

}

console.log(atualizarServico(barbearia.cortes, 2, 40, "Americano"))

function calculaTotal(pedido) {


}
  

