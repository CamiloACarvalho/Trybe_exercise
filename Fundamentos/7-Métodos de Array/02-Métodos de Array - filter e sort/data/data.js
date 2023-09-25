module.exports = {
    gender: [
        {
            id: 1,
            name: 'Ação',
            exhibitionDays: ['Segunda', 'Quarta', 'Sexta'],
            films: [
                {
                    name: 'Vingadores: Ultimato',
                    year: 2019,
                    duration: 181,
                    actors: ['Robert Downey Jr.', 'Chris Evans'],
                    synopsis: 'Os heróis mais poderosos da Terra se reúnem para derrotar Thyears.',
                },
                {
                    name: 'Mad Max: Estrada da Fúria',
                    year: 2015,
                    duration: 120,
                    actors: ['Tom Hardy', 'Charlize Theron'],
                    synopsis: 'Max se une a Furiosa para escapar de um tiryear em '
                        + 'um deserto pós-apocalíptico.',
                },
            ],
        },
        {
            id: 2,
            name: 'Comédia',
            exhibitionDays: ['Terça', 'Quinta', 'Sábado'],
            films: [
                {
                    name: 'Vizinhos',
                    year: 2014,
                    duration: 96,
                    actors: ['Seth Rogen', 'Zac Efron'],
                    synopsis: 'Um casal enfrenta problemas quando uma fraternidade'
                        + 'se muda para a casa ao lado.',
                },
                {
                    name: 'A Escolha Perfeita',
                    year: 2012,
                    duration: 112,
                    actors: ['Anna Kendrick', 'Rebel Wilson'],
                    synopsis: 'Um grupo de estudantes forma um grupo de canto a capella '
                        + 'para competir em campeonatos.',
                },
            ],
        },
        {
            id: 3,
            name: 'Drama',
            exhibitionDays: ['Quarta', 'Sexta', 'Domingo'],
            films: [
                {
                    name: 'Cisne Negro',
                    year: 2010,
                    duration: 108,
                    actors: ['Natalie Portman', 'Mila Kunis'],
                    synopsis: 'Uma bailarina enfrenta pressões e sua própria sanidade '
                        + 'enquanto se prepara para o papel principal.',
                },
                {
                    name: 'La La Land: Cantando Estações',
                    year: 2016,
                    duration: 128,
                    actors: ['Ryan Gosling', 'Emma Stone'],
                    synopsis: 'Um músico e uma atriz se apaixonam enquanto buscam o sucesso '
                        + ' em Los Angeles.',
                },
            ],
        },
        {
            id: 4,
            name: 'Ficção Científica',
            exhibitionDays: ['Segunda', 'Quarta', 'Sábado'],
            films: [
                {
                    name: 'Interestelar',
                    year: 2014,
                    duration: 169,
                    actors: ['Matthew McConaughey', 'Anne Hathaway'],
                    synopsis: 'Uma equipe de astronautas viaja através de um buraco de '
                        + 'minhoca em busca de um novo lar para a humanidade.',
                },
                {
                    name: 'Blade Runner 2049',
                    year: 2017,
                    duration: 164,
                    actors: ['Ryan Gosling', 'Harrison Ford'],
                    synopsis: 'Um detetive descobre um segredo que pode desencadear o caos '
                        + ' em uma sociedade futurista.',
                },
            ],
        },
        {
            id: 5,
            name: 'Animação',
            exhibitionDays: ['Terça', 'Quinta', 'Domingo'],
            films: [
                {
                    name: 'Toy Story 4',
                    year: 2019,
                    duration: 100,
                    actors: ['Tom Hanks', 'Tim Allen'],
                    synopsis: 'Woody e seus amigos embarcam em uma nova aventura quando '
                        + 'Bonnie leva um brinquedo relutante para sua coleção.',
                },
                {
                    name: 'Frozen II',
                    year: 2019,
                    duration: 103,
                    actors: ['Idina Menzel', 'Kristen Bell'],
                    synopsis: 'Elsa e Anna descobrem segredos do passado enquanto buscam '
                        + 'salvar seu reino em perigo.',
                },
            ],
        },
    ],
    hours: {
        Monday: { open: 9, close: 23 },
        Tuesday: { open: 14, close: 22 },
        Wednesday: { open: 12, close: 20 },
        Thursday: { open: 13, close: 21 },
        Friday: { open: 10, close: 23 },
        Saturday: { open: 11, close: 23 },
        Sunday: { open: 12, close: 22 },
    },
    prices: {
        student: 10.00,
        child: 8.00,
        adult: 25.00,
    },
};