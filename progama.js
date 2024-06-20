const readline = require('readline')

const rl = readline.createInterface({

    input: process.stdin,

    output: process.stdout

})

let lembretes = []


exibirMenu()

function exibirMenu() {

    console.log(`

    Menu:

    1. Adicionar lembrete

    2. Lista de lembretes

    3. Editar lembretes

    4. Marcar lembrete como concluído

    5. Sair

    `)

    rl.question('Escolha uma opção: ', (opcao) => {

        switch (opcao) {

            case '1':

                adicionarLembretes()

                break

            case '2':

                listarDeLembretes()

                break

            case '3':

                editarLembretes()

                break

            case '4':
                
                marcarLembrete()

                break

            case '5':

                console.log('Sair')

                rl.close()

                break

            default:

                console.log('Opção inválida, tente novamente.')

                exibirMenu()

                break

        }

    })

}

function adicionarLembretes() {
    rl.question('Digite o nome do lembrete: ', (nomeLembrete) => {

        rl.question('Digite o horário do lembrete: ', (horarioLembrete) => {

            rl.question('Digite o dia do lembrete: ', (diaLembrete) => {

                lembretes.push({ nomeLembrete: nomeLembrete, horarioLembrete: horarioLembrete, diaLembrete: parseInt(diaLembrete) })

                console.log('Lembrete adicionado com sucesso!')

                exibirMenu()

            })

        })

    })

}



