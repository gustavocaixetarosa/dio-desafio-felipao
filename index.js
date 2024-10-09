const readline = require('readline');

function receberInput(pergunta) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    
    return new Promise((resolve) => {
        rl.question(pergunta, (resposta) => {
            resolve(resposta);
            rl.close();
        });
    });
}

function nivelDoHeroi(xp){
    let nivelDeXp = xp / 1000;

    if(nivelDeXp > 10){
        return 'Radiante';
    } else if(nivelDeXp > 9){
        return 'Imortal';
    } else if(nivelDeXp > 8){
        return 'Ascendente';
    } else if(nivelDeXp > 7){
        return 'Platina';
    } else if(nivelDeXp > 5){
        return 'Ouro';
    } else if(nivelDeXp > 2){
        return 'Prata';
    } else if(nivelDeXp > 1){
        return 'Bronze';
    } else {
        return 'Ferro';
    }
}

async function main(){
    const nomeDoHeroi = await receberInput('Digite o nome do herói: ');
    const xpDoHeroi = await receberInput('Qual a quantidade de XP do herói? ');

    let nivelDesteHeroi = nivelDoHeroi(xpDoHeroi);

    console.log(`O Herói de nome ${nomeDoHeroi} está no nível de ${nivelDesteHeroi}`);
}

main();