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

for(let i =0; i<nomes.length ; i++){
    console.log(nomes[i]);
}

//Para acessar o último número do Array, utiliza length - 1
