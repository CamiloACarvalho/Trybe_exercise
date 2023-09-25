module.exports = {
    generos: [
        {
            id: 1,
            nome: "Ação",
            diasExibicao: ["Segunda", "Quarta", "Sexta"],
            filmes: [
                {
                    nome: "Vingadores: Ultimato",
                    ano: 2019,
                    tempoDuracao: 181,
                    atores: ["Robert Downey Jr.", "Chris Evans"],
                    sinopse: "Os heróis mais poderosos da Terra se reúnem para derrotar Thanos."
                },
                {
                    nome: "Mad Max: Estrada da Fúria",
                    ano: 2015,
                    tempoDuracao: 120,
                    atores: ["Tom Hardy", "Charlize Theron"],
                    sinopse: "Max se une a Furiosa para escapar de um tirano em um deserto pós-apocalíptico."
                },
            ],
        },
        {
            id: 2,
            nome: "Comédia",
            diasExibicao: ["Terça", "Quinta", "Sábado"],
            filmes: [
                {
                    nome: "Vizinhos",
                    ano: 2014,
                    tempoDuracao: 96,
                    atores: ["Seth Rogen", "Zac Efron"],
                    sinopse: "Um casal enfrenta problemas quando uma fraternidade se muda para a casa ao lado."
                },
                {
                    nome: "A Escolha Perfeita",
                    ano: 2012,
                    tempoDuracao: 112,
                    atores: ["Anna Kendrick", "Rebel Wilson"],
                    sinopse: "Um grupo de estudantes forma um grupo de canto a capella para competir em campeonatos."
                },
            ],
        },
        {
            id: 3,
            nome: "Drama",
            diasExibicao: ["Quarta", "Sexta", "Domingo"],
            filmes: [
                {
                    nome: "Cisne Negro",
                    ano: 2010,
                    tempoDuracao: 108,
                    atores: ["Natalie Portman", "Mila Kunis"],
                    sinopse: "Uma bailarina enfrenta pressões e sua própria sanidade enquanto se prepara para o papel principal."
                },
                {
                    nome: "La La Land: Cantando Estações",
                    ano: 2016,
                    tempoDuracao: 128,
                    atores: ["Ryan Gosling", "Emma Stone"],
                    sinopse: "Um músico e uma atriz se apaixonam enquanto buscam o sucesso em Los Angeles."
                },
            ],
        },
        {
            id: 4,
            nome: "Ficção Científica",
            diasExibicao: ["Segunda", "Quarta", "Sábado"],
            filmes: [
                {
                    nome: "Interestelar",
                    ano: 2014,
                    tempoDuracao: 169,
                    atores: ["Matthew McConaughey", "Anne Hathaway"],
                    sinopse: "Uma equipe de astronautas viaja através de um buraco de minhoca em busca de um novo lar para a humanidade."
                },
                {
                    nome: "Blade Runner 2049",
                    ano: 2017,
                    tempoDuracao: 164,
                    atores: ["Ryan Gosling", "Harrison Ford"],
                    sinopse: "Um detetive descobre um segredo que pode desencadear o caos em uma sociedade futurista."
                }
            ]
        },
        {
            id: 5,
            nome: "Animação",
            diasExibicao: ["Terça", "Quinta", "Domingo"],
            filmes: [
                {
                    nome: "Toy Story 4",
                    ano: 2019,
                    tempoDuracao: 100,
                    atores: ["Tom Hanks", "Tim Allen"],
                    sinopse: "Woody e seus amigos embarcam em uma nova aventura quando Bonnie leva um brinquedo relutante para sua coleção."
                },
                {
                    nome: "Frozen II",
                    ano: 2019,
                    tempoDuracao: 103,
                    atores: ["Idina Menzel", "Kristen Bell"],
                    sinopse: "Elsa e Anna descobrem segredos do passado enquanto buscam salvar seu reino em perigo."
                }
            ]
        }
    ],
    horarios: {
        Segunda: { abre: 9, fecha: 23 },
        Terca: { abre: 14, fecha: 22 },
        Quarta: { abre: 12, fecha: 20 },
        Quinta: { abre: 13, fecha: 21 },
        Sexta: { abre: 10, fecha: 23 },
        Sabado: { abre: 11, fecha: 23 },
        Domingo: { abre: 12, fecha: 22 },
    },
    precos: {
        estudante: 10.00,
        crianca: 8.00,
        adulto: 25.00,
    },
};