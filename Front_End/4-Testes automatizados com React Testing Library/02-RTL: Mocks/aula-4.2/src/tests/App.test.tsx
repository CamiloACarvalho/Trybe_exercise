import { screen, render, waitForElementToBeRemoved } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';
import App from '../App';
import { movies, oneMovie } from './mocks/movies';

describe('Testa o componente App:', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('Deve renderizar os filmes na tela.', async () => {
    // global.fetch = vi.fn().mockResolvedValue({
    //     json: async () => movies,
    //   });
    vi.spyOn(global, 'fetch').mockResolvedValue({
      json: async () => movies,
    } as Response);
    render(<App />);
    const movieTitles = await screen.findAllByRole('heading', { level: 2 });
    expect(movieTitles).toHaveLength(5);
  });

  it('Deve renderizar os detalhes de um filme', async () => {
    vi.spyOn(global, 'fetch')
    .mockResolvedValueOnce({ json: async () => movies } as Response)
    .mockResolvedValueOnce({ json: async () => oneMovie } as Response);

    render(<App />);
    const loading = screen.getByText(/Carregando.../i);
    await waitForElementToBeRemoved(loading);
    const detailsLink = screen.getAllByText('Ver detalhes');
    await userEvent.click(detailsLink[0]);
    const movieTitle = screen.getByRole('heading', { level: 1, name: /Gladiador/i });
    const storyline = screen.getByText(/sinopse/i);
    expect(movieTitle).toBeInTheDocument();
    expect(storyline).toBeInTheDocument();
    expect(global.fetch).toHaveBeenCalledTimes(2);
  });

  it('Deve adicionar um filme', async () => {
    vi.spyOn(global, 'fetch').mockResolvedValue({
      json: async () => movies,
    } as Response);
    render(<App />);
    const loading = screen.getByText(/Carregando.../i);
    await waitForElementToBeRemoved(loading);
    const goBackLink = screen.getByText(/voltar/i);
    await userEvent.click(goBackLink);
    const addMovieBtn = screen.getByText(/ADICIONAR CARTÃO/i);
    await userEvent.click(addMovieBtn);
    const title = screen.getByLabelText('Novo Filme');
    const subtitle = screen.getByLabelText('Subtítulo');
    const image = screen.getByLabelText('Imagem');
    const storyLine = screen.getByLabelText('Sinopse');
    const genreSelect = screen.getByLabelText('Genre Select');
    const rating = screen.getByLabelText('Avaliação');
    await userEvent.type(title, 'Título');
    await userEvent.type(subtitle, 'Subtítulo');
    await userEvent.type(image, 'Imagem');
    await userEvent.type(storyLine, 'Sinopse');
    await userEvent.click(genreSelect);
    await userEvent.type(genreSelect, 'c');
    await userEvent.type(rating, '1');
    const submitBtn = screen.getByRole('button', { name: /Submit/i });
    await userEvent.click(submitBtn);
    screen.debug();
    await screen.findByText(/Novo Filme/i);
  });

  it.todo('Deve editar um filme');
});
