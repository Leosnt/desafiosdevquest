let calc = Number(prompt('Qual função de calculo você deseja? \n Soma(0) - Subtração(1) - Multiplicação(2) - Divisão(3)'))
 
if(calc > 3 || Number(calc) != calc) {
    alert('Digite uma opção válida!!!')
    location.reload()
}else{
    let numero1 = Number(prompt('Digite um numero: '))
    let numero2 = Number(prompt('Digite outro numero: '))

    if (calc == 0){
        function somar(numero1, numero2) {
            return numero1 + numero2;
        }
    let resultadoSoma = somar(numero1, numero2)
    console.log ('A soma dos dois números é: ' + resultadoSoma)

    }else if (calc == 1){
        function sub(numero1, numero2) {
            return numero1 - numero2;
        }
    let resultadoSoma = sub(numero1, numero2)
    console.log ('A subtração dos dois números é: ' + resultadoSoma)

    }else if (calc == 2){
        function mult(numero1, numero2) {
            return numero1 * numero2;
        }
    let resultadoSoma = mult(numero1, numero2)
    console.log ('A multiplicação dos dois números é: ' + resultadoSoma)

    }else{
        function div(numero1, numero2) {
            return numero1 / numero2;
        }
    let resultadoSoma = div(numero1, numero2)
    console.log ('A divisão dos dois números é: ' + resultadoSoma)
    }}