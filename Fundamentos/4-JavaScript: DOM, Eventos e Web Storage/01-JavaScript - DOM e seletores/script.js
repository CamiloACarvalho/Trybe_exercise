onst students36 = { // object { }
    studentsInfo: [ // Chave do objeto students36 que é um array [ ]
        {
            picture: "https://ca.slack-edge.com/TM13XHBBQ-U04D382RM0S-e856b713b7a6-512",
            trybe: "CH36",
            student_name: "Enza Rafaela",
            project_lessons_learned: 5,
            project_sup_pirilampo: 55,
            project_pixels_art: 40
        },
        {
            picture: "https://ca.slack-edge.com/TM13XHBBQ-U01FLMM2CJ1-c77bcc8d5e26-512",
            trybe: "CH36",
            student_name: "Carolzita",
            project_lessons_learned: 3,
            project_sup_pirilampo: 50,
            project_pixels_art: 40
        },
        {
            picture: "https://ca.slack-edge.com/TM13XHBBQ-U01JQRR7FSS-08320a8171e3-512",
            trybe: "CH36",
            student_name: "Joicy Oliveira",
            project_lessons_learned: 3,
            project_sup_pirilampo: 10,
            project_pixels_art: 40
        },
        {
            picture: "https://ca.slack-edge.com/TMDDFEPFU-U02DRKAEW49-1d61518c4b61-192",
            trybe: "CH36",
            student_name: "Ana Berguer",
            project_lessons_learned: 5,
            project_sup_pirilampo: 30,
            project_pixels_art: 20
        },
        {
            picture: "https://ca.slack-edge.com/TM13XHBBQ-U03DNHZLCH1-1673b49a990f-512",
            trybe: "CH36",
            student_name: "Thalles Carneiro",
            project_lessons_learned: 1,
            project_sup_pirilampo: 10,
            project_pixels_art: 30
        },
        {
            picture: "https://ca.slack-edge.com/TM13XHBBQ-U035TM9C7DJ-7e82035ead9d-512",
            trybe: "CH36",
            student_name: "Mari Demarchi",
            project_lessons_learned: 5,
            project_sup_pirilampo: 40,
            project_pixels_art: 40
        },
        {
            picture: "https://ca.slack-edge.com/TMDDFEPFU-U0242BL909E-86f2c8470127-512",
            trybe: "CH36",
            student_name: "JLO",
            project_lessons_learned: 5,
            project_sup_pirilampo: 32,
            project_pixels_art: 19
        },

    ]
}

// Retorna apenas um valor (elemento):
// getElementById
// querySelector (apenas o primeiro)
//      por ID: #
//      por class: .

// Retornam mais de um valor (Array):
// getElementsbyClassName = HTMLCollection = Array
// getElementsbyTagName = HTMLCollection = Array
// querySelectorAll = NodeList = Array

// Sorteando uma pessoa estudante:
const indexSorteada = Math.floor(Math.random() * students36.studentsInfo.length);

const elementoNome = document.querySelector('#name');
// elementoNome.style.backgroundColor = 'blue';
elementoNome.innerText = students36.studentsInfo[indexSorteada].student_name;

const elementosNotas = document.querySelectorAll('.gradeProject');
elementosNotas[0].innerText = students36.studentsInfo[indexSorteada].project_lessons_learned;
elementosNotas[1].innerText = students36.studentsInfo[indexSorteada].project_sup_pirilampo;
elementosNotas[2].innerText = students36.studentsInfo[indexSorteada].project_pixels_art;

const verificarNotas = () => {
    // const somatorioNotas = students36.studentsInfo[indexSorteada].project_lessons_learned +
    //                        students36.studentsInfo[indexSorteada].project_sup_pirilampo +
    //                        students36.studentsInfo[indexSorteada].project_pixels_art;

    const somatorioNotas = parseInt(elementosNotas[0].innerText) +
        +elementosNotas[1].innerText +
        +elementosNotas[2].innerText;

    if (somatorioNotas >= 85) {
        return 'aprovada';
    } else {
        return 'reprovada';
    }
}

const elementoResultado = document.querySelector('#results');
elementoResultado.textContent = verificarNotas().toUpperCase();
elementoResultado.className = verificarNotas();

// const elementoImg = document.getElementsByTagName('img');
const elementoImg = document.querySelector('.student-info img');
elementoImg.src = students36.studentsInfo[indexSorteada].picture;