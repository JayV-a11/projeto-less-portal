import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import axios from 'axios';

function CreditCardForm() {
  const [cards, setCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState('');
  const [number, setNumber] = useState('');
  const [titular, setTitular] = useState('');
  const [expiration, setExpiration] = useState('');
  const [main, setMain] = useState(false);

  useEffect(() => {
    async function fetchCards() {
      try {
        const response = await axios.get('http://localhost:8080/card?customer_id=7b332040-5654-4933-8ac2-61b44f9572b8');
        setCards(response.data);
      } catch (error) {
        console.error('Erro ao buscar cartões:', error);
      }
    }
    fetchCards();
  }, []);

  const handleCardSelection = (card) => {
    setSelectedCard(card);
  };

  const handleAddNewCard = async () => {
    try {
      await axios.post('http://localhost:8080/card', {
        customer_id: '7b332040-5654-4933-8ac2-61b44f9572b8',
        number: number,
        titular: titular,
        expiration: expiration,
        main: main,
      });
      // Limpar os campos após adicionar o novo cartão
      setNumber('');
      setTitular('');
      setExpiration('');
      setMain(false);
      // Recarregar a lista de cartões
      const response = await axios.get('http://localhost:8080/card?customer_id=7b332040-5654-4933-8ac2-61b44f9572b8');
      setCards(response.data);
    } catch (error) {
      console.error('Erro ao adicionar cartão:', error);
    }
  };

  return (
    <div>
      <form>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <TextField
                select
                label="Selecione um cartão"
                value={selectedCard}
                onChange={(e) => handleCardSelection(e.target.value)}
                fullWidth
              >
                {cards.map((card, index) => (
                  <MenuItem key={index} value={card}>
                    {card.number}, {card.titular}, {card.expiration}
                  </MenuItem>
                ))}
              </TextField>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="number"
              name="number"
              label="Número do Cartão"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="titular"
              name="titular"
              label="Titular do Cartão"
              value={titular}
              onChange={(e) => setTitular(e.target.value)}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="expiration"
              name="expiration"
              label="Data de Expiração"
              value={expiration}
              onChange={(e) => setExpiration(e.target.value)}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="main"
              name="main"
              label="Principal"
              type="checkbox"
              checked={main}
              onChange={(e) => setMain(e.target.checked)}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" onClick={handleAddNewCard}>
              Adicionar Novo Cartão
            </Button>
          </Grid>
        </Grid>
      </form>

      <h3>Cartão Selecionado:</h3>
      {selectedCard && (
        <div>
          <p>Número: {selectedCard.number}</p>
          <p>Titular: {selectedCard.titular}</p>
          <p>Expiração: {selectedCard.expiration}</p>
        </div>
      )}
    </div>
  );
}

export default CreditCardForm;
