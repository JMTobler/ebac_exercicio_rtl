import { fireEvent, render, screen } from '@testing-library/react';
import Post from '.';
import PostComment from '.';

describe('PostComments Component', () => {
    test('deve permitir a inserção de dois comentários e exibí-los na lista', () => {
      render(<PostComment />);
  
      // Seleciona os elementos com os data-testid
      const input = screen.getByTestId('comment-input');
      const button = screen.getByTestId('submit-button');
  
      // Insere o primeiro comentário
      fireEvent.change(input, { target: { value: 'Primeiro comentário' } });
      fireEvent.click(button);
  
      // Insere o segundo comentário
      fireEvent.change(input, { target: { value: 'Segundo comentário' } });
      fireEvent.click(button);
  
      // Verifica se os comentários estão na lista
      expect(screen.getByText('Primeiro comentário')).toBeInTheDocument();
      expect(screen.getByText('Segundo comentário')).toBeInTheDocument();
    });
  });