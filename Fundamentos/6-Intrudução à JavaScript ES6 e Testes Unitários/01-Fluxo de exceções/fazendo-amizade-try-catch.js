const checar = (idade) => {
    // if (idade >= 18) {
    //     return true; // apta
    // } else {
    //     return false; // nao apta
    // }

    if (idade < 18) {
        throw new Error('X Entrada NÃO permitida X');
    }
}

const tentar = () => {
    const idade = 17;

    try { // tenta executar algo
        checar(idade);

        return 'Entrada Permitida';
    } catch (erro) { // captura do erro
        return erro.message;
    } finally { // finalmentes - sempre executa esse bloco depois do try ou catch
        console.log('Entrou no finally');
    }


    // if (checar(idade)) {
    //     return 'Entrada Permitida';
    // } else {
    //     return ;
    // }
}

console.log(tentar());