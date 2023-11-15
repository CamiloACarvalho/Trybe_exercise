
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Counter } from '../components/counter';

describe('Testando o componente Counter:', () => {
  it('Deve exibir o contador na tela', () => {
    render(<Counter />);
    //Arrange
    const counter = screen.getByRole('heading', { level: 1 });
    //Act
    //Assert
    expect(counter).toBeInTheDocument();
    expect(counter).toHaveTextContent('0');
  });

  it('Deve possuir os botões de incrementar e decrementar', () => {
    render(<Counter />);
    //Arrange
    const incrementBtn = screen.getByRole('button', { name: /Increment/i });
    const decrementBtn = screen.getByRole('button', { name: /decrement/i });
    //Assert
    expect(incrementBtn).toBeInTheDocument();
    expect(decrementBtn).toBeInTheDocument();
  });

  it('Deve ser possível incrementar o contador ao clicar no botão de incrementar', async () => {
    render(<Counter />);
    //Arrange
    const incrementBtn = screen.getByRole('button', { name: /increment/i });
    //Act
    await userEvent.click(incrementBtn);
    //Arrange
    const counter = screen.getByRole('heading', { level: 1 });
    //Assert
    expect(counter.textContent).toBe('1');
  });
  it('Deve ser possível decrementar o contador ao clicar no botão de decrementar', async () => {
    render(<Counter />);
    //Arrange
    const decrementBtn = screen.getByRole('button', { name: /decrement/i });
    //Act
    await userEvent.click(decrementBtn);
    //Arrange
    const counter = screen.getByRole('heading', { level: 1 });
    //Assert
    expect(counter.textContent).toBe('-1');
  });
});