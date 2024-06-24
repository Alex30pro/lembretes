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

function listarDeLembretes() {

    if (lembretes.length === 0) {

        console.log('Nenhum Lembrete cadastrado')

    } else {

        console.log('Lista de lembretes cadastrados:')

            lembretes.forEach(lembrete => {

            console.log(`Lembrete: ${lembrete.nomeLembrete}, Horário: ${lembrete.horarioLembrete}, Dia: ${lembrete.diaLembrete}`)

        })

    }

    exibirMenu()

}
function editarLembretes() {
   
    rl.question('Digite o número do lembrete que deseja editar: ', (numero) => {

        if (numero > 0 && numero <= lembretes.length) {

            rl.question('Digite o novo nome do lembrete: ', (novoLembrete) => {

                rl.question('Digite o novo horário do lembrete: ', (novoHorario) => {

                    rl.question('Digite o novo dia do lembrete: ', (novoDia) => {

                        lembretes[numero - 1] = {

                            nomeLembrete: novoLembrete,

                            horarioLembrete: novoHorario,

                            diaLembrete: parseFloat(novoDia)

                        }

                        console.log('Lembrete editado com sucesso!');

                        exibirMenu();

                    });

                });

            });

        } else {

            console.log('Número inválido, tente novamente.');

            exibirMenu();

        }

    });

}

function marcarLembrete() {

    rl.question('Digite o número do lembrete que está concluído: ', (numero) => {

        if (numero > 0 && numero <= lembretes.length) {

            lembretes[numero - 1].concluido = true;

            console.log('Lembrete marcado como concluído.');

        } else {

            console.log('Número de lembrete inválido.');
        }
        exibirMenu();
       
    });
}


