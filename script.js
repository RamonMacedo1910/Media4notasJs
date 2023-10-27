alert("programa para calcular a sua média");
alert("Digite apenas números entre 0 e 10, por favor.");

let nota1 = Number (prompt("Digite a sua 1° nota:"));
let nota2 = Number (prompt("Digite sua 2° nota:"));
let nota3 = Number (prompt("Digite sua 3° nota:"));
let nota4 = Number (prompt("Digite sua 4° nota:"));

if( nota1 < 0 || nota1 > 10 
    || nota2 < 0 || nota2 > 10
    || nota3 < 0 || nota3 > 10 
    || nota4 < 0 || nota4 > 10 )
    {
        alert('Apenas números entre 0 e 10.')

    }

else {
    let total = nota1 + nota2 + nota3 + nota4
    let media = total / 4 

    if( media < 5 ) {
        alert(`Você foi reprovado! Sua media foi de ${media}.`)
    }
    else if (media <= 7){
        alert(`você ficou de recuperação! Sua media foi de ${media}.`)
    }
    else {
        alert(`Parabéns, você foi aprovado! Sua media foi de ${media}.`)
    }
}