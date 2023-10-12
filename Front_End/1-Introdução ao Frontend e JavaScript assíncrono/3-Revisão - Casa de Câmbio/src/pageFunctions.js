// 4 - Renderizar os dados na tela

const creatLiElement = (currency) => {
  const liElement = document.createElement('li');
  const dateElement = document.createElement('p');
  const valueElement = document.createElement('span');

  const ms = 1000;
  const date = new Date(currency.timestamp * ms); //convertendo o tempo para ms. Porque a função new Date só lê ms e conta de 01/01/1970 

  dateElement.textContent = date.toLocaleDateString('pt-BR'); //toLocaleDateString serve para traduzir, converter para datas locais
  valueElement.textContent = currency.ask;
  liElement.appendChild(dateElement);
  liElement.appendChild(valueElement);
};

export const renderCurrenciesList = (
  currenciesList,
  listElemnt,
  titleElement,
) => {
  listElemnt.innetHTML = '';

  const { code, codeIn } = currenciesList[0];
  titleElement.textContent = `Cotações de ${code}/${codeIn} dos últimos 30 dias`;

  const listElement = currenciesList.map((currency) => creatLiElement)

  listElement.append(...liElement);
};
