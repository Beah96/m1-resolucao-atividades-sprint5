let higiene = ['shampoo', 'sabonete', 'escova de dente', 'desinfetante', 'papel']
let alimentacao = ['pão', 'salsicha', 'molho de tomate', 'biscoito', 'suco']
let farmacia = ['curativo', 'água oxigenada', 'analgésico', 'algodão', 'termômetro']
let lazer = ['baralho', 'violão', 'bola de vôlei', 'rede', 'som']

let caixaDeSuprimentos = [higiene, alimentacao, farmacia, lazer]

function suprimentos(){

    if (caixaDeSuprimentos.length < 4){ // Verificando se a caixa tem menos de 4 seções
        
        return 'Algum amigo ainda não retornou com os itens.'
    
    } else if (caixaDeSuprimentos.length > 4){ // Verificando se a caixa tem mais de 4 seções
    
        return 'Acho que temos um intruso.'
    
    } else { // Caso a caixa tenha 4 seções
    
        for (let i = 0; i < caixaDeSuprimentos.length; i++){ // Percorrendo as seções
    
            if (caixaDeSuprimentos[i].length < 5){ // Se a seção acessada possui menos que 5 itens
                return `Precisamos de mais itens na seção ${[i]}.`
            }
            if (caixaDeSuprimentos[i].length > 5){ // Se a seção acessada possui mais que 5 itens
                return `Tem itens demais na seção ${[i]}, não precisamos de tantos.`
            }
    
        }
    
        return 'Podemos ir acampar' // Caso o loop termine e nenhum outro retorno aconteça, é seguro dizer que todas as caixas têm 5 itens
    }

}

console.log(suprimentos())

