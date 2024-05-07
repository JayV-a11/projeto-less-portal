import React from 'react';
import { render } from '@testing-library/react';
import AdmDevolucoes from './page';

describe('AdmDevolucoes component', () => {
  test('Renderiza os botões corretamente com o status "Reembolso"', () => {
    const compras = [
      {
        produto: "A Revolução dos Bichos (5)",
        price: "R$ 98,75",
        date: "19 de março de 2024",
        status: 'Reembolso',
      }
    ];

    const { getByText } = render(<AdmDevolucoes compras={compras} />);

    expect(getByText('Validar reembolso')).toBeInTheDocument();
    expect(getByText('Confirmar envio')).not.toBeInTheDocument();
  });

  test('Renderiza os botões corretamente com o status "Pendente envio"', () => {
    const compras = [
      {
        produto: "Dom Casmurro (1)",
        price: "R$ 42,50",
        date: "19 de março de 2024",
        status: 'Pendente envio',
      }
    ];

    const { getByText } = render(<AdmDevolucoes compras={compras} />);

    expect(getByText('Confirmar envio')).toBeInTheDocument();
    expect(getByText('Validar reembolso')).not.toBeInTheDocument();
  });

  // Testes para os casos em que não há botões renderizados de acordo com outros status
});
