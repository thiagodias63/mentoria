// Aqui vamos praticar a parte de laços de repetição.
// O laços de repetições permitem que executemos um trecho de código até que uma condição seja satisfeita.
// Pra começar temos o "while", que tem a seguinte sintaxe:
let idade = 0;
while (idade < 18) {
    console.log(`Com ${idade} ainda não pode beber!`)
    idade = idade + 1;
}
console.log(`Agora com ${idade} já pode beber!`)
// O código acima vai imprimir o seguinte:
// Com 0 ainda não pode beber!
// Com 1 ainda não pode beber!
// Com 2 ainda não pode beber!
// Com 3 ainda não pode beber!
// Com 4 ainda não pode beber!
// Com 5 ainda não pode beber!
// Com 6 ainda não pode beber!
// Com 7 ainda não pode beber!
// Com 8 ainda não pode beber!
// Com 9 ainda não pode beber!
// Com 10 ainda não pode beber!
// Com 11 ainda não pode beber!
// Com 12 ainda não pode beber!
// Com 13 ainda não pode beber!
// Com 14 ainda não pode beber!
// Com 15 ainda não pode beber!
// Com 16 ainda não pode beber!
// Com 17 ainda não pode beber!
// Agora com 18 já pode beber!
// ------------------------------------------------------------
// O próximo laço de repetição que vamos ver é o "for". 
// O "for" é mais usado quando temos o seguinte fluxo: 
// 1.Começando com o valor X
// 2.Até que X satisfaça a seguinte condição
// 3.Aumente/diminua o valor X
// Então rescrevendo do "while" ficaria da seguinte forma:
for (let idade = 0; idade < 18; idade = idade + 1) {
    console.log(`Com ${idade} ainda não pode beber!`)
}
console.log(`Agora com 18 já pode beber!`)
// E o código acima teria a mesma impressão que o "while" no console.
// ------------------------------------------------------------
// E por fim vamos falar do laço de repetição usado no exemplo de comissões, o "forEach".
// Quando precisamos percorrer cada valor de um array, poderiamos usar o while e o for pra passar por todos os indices
// Mas o javascript, assim como outras linguages, oferece um método embutido no próprio array que permite fazer esse laço de repetição.
// A tradução desse método é "para cada", que permite que executemos um trecho de código para cada item dentro do array
// Então vamos repetir o exemplo dos outros dois laços de repetição.
let idades = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18];
idades.forEach((idade) => {
    if (idade < 18) {
        console.log(`Com ${idade} ainda não pode beber!`)
    } else {
        console.log(`Agora com ${idade} já pode beber!`)     
    }
});
// Assim teremos a mesma impressão dos demais laços de repetição.