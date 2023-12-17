let nome = "Igor Alves";
let nivelExperiencia = 6555;
let contador = 0;

while (contador == 0) {
    contador++;
    if (nivelExperiencia <= 1000) {
        console.log("O jogador " + nome + " se encontra no nível ferro!");
    } else if (nivelExperiencia >= 1001 && nivelExperiencia <= 2000) {
        console.log("O jogador " + nome + " se encontra no nível bronze!");
    } else if (nivelExperiencia >= 2001 && nivelExperiencia <= 5000) {
        console.log("O jogador " + nome + " se encontra no nível prata!");
    } else if (nivelExperiencia >= 5001 && nivelExperiencia <= 7000) {
        console.log("O jogador " + nome + " se encontra no nível ouro!");
    } else if (nivelExperiencia >= 7001 && nivelExperiencia <= 8000) {
        console.log("O jogador " + nome + " se encontra no nível platina!");
    } else if (nivelExperiencia >= 8001 && nivelExperiencia <= 9000) {
        console.log("O jogador " + nome + " se encontra no nível ascendente!");
    } else if (nivelExperiencia >= 9001 && nivelExperiencia <= 10000) {
        console.log("O jogador " + nome + " se encontra no nível imoral!");
    } else if (nivelExperiencia >= 10001) {
        console.log("O jogador " + nome + " se encontra no nível radiante!");
    }
}
