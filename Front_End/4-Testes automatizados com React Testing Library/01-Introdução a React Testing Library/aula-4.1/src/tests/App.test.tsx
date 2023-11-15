import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

describe('Testando o componente App:', () => {
  it('Se existe o botão de alterar o tema', () => {
    render(<App />);
    //Arrange
    const toggleBtn = screen.getByLabelText('toggle-theme');
    //Assert
    expect(toggleBtn).toBeInTheDocument();
  });

  it('Se ao clicar no botão, altera para o tema escuro', async () => {
    render(<App />);
    //Arrange
    const toggleBtn = screen.getByLabelText('toggle-theme');
    //Assert
    expect(toggleBtn.parentElement).toHaveAttribute('class', 'App light');
    //Act
    await userEvent.click(toggleBtn);
    //Assert
    expect(toggleBtn.parentElement).toHaveAttribute('class', 'App dark');
  });

  it('Se ao clicar duas vezes no botão, volta para o tema claro', async () => {
    render(<App />);
    //Arrange
    const toggleBtn = screen.getByLabelText('toggle-theme');
    //Assert
    expect(toggleBtn.parentElement).toHaveAttribute('class', 'App light');
    //Act
    await userEvent.click(toggleBtn);
    await userEvent.click(toggleBtn);
    //Assert
    expect(toggleBtn.parentElement).toHaveAttribute('class', 'App light');
  });
});