//Arrays são "espaços" numerados de 0 a n...que ficam armazenados informações.
//Posições de Arrays sempre começarão em zero, logo a posição = n-1
//A tamanho dos Arrays são sempre o número de elementos.

//Para saber o tamanho do tamanho o length o comando é: array.length (qtos elementos o array tem)
//Para acessar o índice dos arrays, basta fazer: array[indice]

//Variável

const nomes = ['Camilo', 'Geizianne','Cidinha', 'Gabriel', 'Enza'];
console.log(nomes.length); //Para saber o tamanho do Array
console.log(nomes[1]); //Buscar o itemm na posição 1, neste caso Geizianne

//Para exibir o nome de todos dentro do array, teria que criar 5 linhas, cada linha um console.log com o índice diferente para acessar todos os nomes
//Para facilitar esse trabalho utilizamos o FOR

for(let i =0; i<nomes.length ; i+=1){
    console.log(nomes[i]);
}

//Para acessar o último número do Array, utiliza length - 1
//Não usa ++. Agora utiliza-se: i += 1
//Como usar o debug (seta com joaninha)

//Template Literals ou string literals (é uma forma de juntar strings)
console.log(`a soma de 2+2 = ${2+2}`);
console.log(`multiplicação de 3x5 = ${3*5}`);

//Essa é o template literals

//DAQUI PRA FRENTE FOI ALGO QUE INVENTEI NO FINAL DA AULA E FUI DANDO CORPO A ELA. A IDEIA AGORA É FAZER UM HTML E CSS 

//Número para jogar na mega sena
let megaSena = [];
let random;
let randomNumber
let numerosRepetidos = [];


for(let num =0 ; num <= 5; num +=1){
    // Gera um número randômico entre 0 (inclusive) e 1 (exclusive)
    random = Math.random();
    // Gera um número randômico entre 1 e 60 (ambos inclusive)
    randomNumber = Math.floor(random * 60) + 1;
    //Armazena no Array megaSena e verifica se tem número igual
    megaSena.push(randomNumber); 

    for(let k=0; k<megaSena.length; k+=1){

        for(let j=k+1; j<megaSena.length; j+=1){
    
            if(megaSena[k] === megaSena [j]){
    
                numerosRepetidos.push(megaSena[k]);
    
                megaSena.splice(k, 1); 

                random = Math.random();
            
                randomNumber = Math.floor(random * 60) + 1;
              
                megaSena.push(randomNumber); 

            }
        }
    }
}

megaSena.sort(function(a, b) {

    return a - b;

  });

console.log(megaSena);


// console.log(numerosRepetidos);
// console.log(megaSena);
