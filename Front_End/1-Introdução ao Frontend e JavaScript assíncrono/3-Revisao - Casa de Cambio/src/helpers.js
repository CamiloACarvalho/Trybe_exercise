function createLiElement(currency) {
  const liElement = document.createElement('li');
  const dateElement = document.createElement('p');
  const valueElement = document.createElement('span');

  const MILISECONDS = 1000;
  const date = new Date(currency.timestamp * MILISECONDS);

  dateElement.textContent = date.toLocaleDateString('pt-BR');
  valueElement.textContent = currency.ask;

  liElement.appendChild(dateElement);
  liElement.appendChild(valueElement);

  return liElement;
}

export function renderCurrenciesList(
  currenciesList,
  listElement,
  titleElement,
) {
  listElement.innetHTML = '';

  const { code, codein } = currenciesList[0];
  titleElement.textContent = `Cotações ${code}/${codein} dos últimos 30 dias`;

  const liElements = currenciesList.map((currency) => createLiElement(currency));

  listElement.append(...liElements);
}
