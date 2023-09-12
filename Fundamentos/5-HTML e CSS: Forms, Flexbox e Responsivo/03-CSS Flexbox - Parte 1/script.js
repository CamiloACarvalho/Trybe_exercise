const gerarImagens = (arrayDeDados) => {
    const photoGridContainer = document.querySelector('.photo-grid-container');
    photoGridContainer.innerHTML = '';
     const divPhotoGrid = document.createElement('div');
     divPhotoGrid.className = 'photo-grid';
   
     for (let index = 0; index < arrayDeDados.length; index+=1) {
       const imgPhotoGrid = document.createElement('img');
        imgPhotoGrid.src = arrayDeDados[index];
        divPhotoGrid.appendChild(imgPhotoGrid);
     }
   
     photoGridContainer.appendChild(divPhotoGrid);
   
   }
   window.onload = () => {
     const people = {
       Turma: ['https://ca.slack-edge.com/TMDDFEPFU-U05KN9G9RGD-fa4731ad3264-512',
       'https://ca.slack-edge.com/TMDDFEPFU-U0532H7K6FM-5d521647a4cc-192',
       'https://ca.slack-edge.com/TMDDFEPFU-U05KJHDQEHL-e8a51b882369-192',
         'https://ca.slack-edge.com/TMDDFEPFU-U052ZNZ7U6R-a796f69988aa-512',
         'https://ca.slack-edge.com/TMDDFEPFU-U057NJADEES-23adf1908b10-512',
         'https://ca.slack-edge.com/TMDDFEPFU-U05LEU1966L-9de32f181268-192',
         'https://ca.slack-edge.com/TMDDFEPFU-U05LETVGYQ0-b74cbe661e96-512',
         'https://ca.slack-edge.com/TMDDFEPFU-U0532H95WJF-d1ced896cdab-192',
         'https://ca.slack-edge.com/TMDDFEPFU-U05KR7EFTU2-910621be2305-512',
         'https://ca.slack-edge.com/TMDDFEPFU-U052N4Y8487-77becca7692d-512',
         'https://ca.slack-edge.com/TMDDFEPFU-U05LETY79CG-fca716079498-192', ' https://ca.slack-edge.com/TMDDFEPFU-U05LEU1Q4NL-c93f64e3eeba-512',],
       Time: ['https://ca.slack-edge.com/TMDDFEPFU-U01FWFS901G-1e757c976fc5-512',
         'https://ca.slack-edge.com/TM13XHBBQ-U03DNHZLCH1-1673b49a990f-512',
         'https://ca.slack-edge.com/TM13XHBBQ-U035TM9C7DJ-50dd640a9409-512',
         'https://ca.slack-edge.com/TMDDFEPFU-U0242BL909E-86f2c8470127-512',
         'https://ca.slack-edge.com/TM13XHBBQ-U01JQRR7FSS-08320a8171e3-512',
         'https://ca.slack-edge.com/TMDDFEPFU-U039N8GEQF9-dcb5a6e84168-512',],
       Braba: ['https://ca.slack-edge.com/TM13XHBBQ-U04D382RM0S-e856b713b7a6-512'],
     }
   
     const selectPerson = document.getElementById('inputGroupSelect01');
   
     selectPerson.addEventListener('change', (event) => {
       const photGrid = document.querySelector('.photo-grid')
       if(photGrid){
         photGrid.innerHTML = '';
   
       }
       gerarImagens(people[selectPerson.value]);
       //objeto.time
       //objeto[time] me retorna um array
   
   
   
     })
   
   }