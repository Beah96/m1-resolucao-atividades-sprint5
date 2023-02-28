let higiene = ['shampoo', 'sabonete', 'escova de dente', 'desinfetante', 'papel']
let alimentacao = ['pão', 'salsicha', 'molho de tomate', 'biscoito', 'suco']
let farmacia = ['curativo', 'água oxigenada', 'analgésico', 'algodão', 'termômetro']
let lazer = ['baralho', 'violão', 'bola de vôlei', 'rede', 'som']

let caixaDeSuprimentos = [higiene, alimentacao, farmacia, lazer]

function suprimentos(){

    if (caixaDeSuprimentos.length == 4){
        
        for (let i = 0; i < caixaDeSuprimentos.length; i++){

            if (caixaDeSuprimentos[i].length < 5){
                return `Precisamos de mais itens na seção ${[i]}.`
            }
            if (caixaDeSuprimentos[i].length > 5){
                return `Tem itens demais na seção ${[i]}, não precisamos de tantos.`
            }

        }

        return 'Podemos ir acampar'

    } else if (caixaDeSuprimentos.length < 4){

        return 'Algum amigo ainda não retornou com os itens.'

    } else {

        return 'Acho que temos um intruso.'
    }

}

console.log(suprimentos())
