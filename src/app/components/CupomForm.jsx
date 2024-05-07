import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './cupomform.css';
function CouponForm() {
  const [cupom, setCupom] = useState('');
  const [cupomInvalido, setCupomInvalido] = useState(false);

  const handleAddValidCoupon = () => {
    // Lógica para adicionar cupom válido aqui
    alert(`Cupom válido adicionado: ${cupom}`);
  };

  const handleAddInvalidCoupon = () => {
    // Lógica para adicionar cupom inválido aqui
    setCupomInvalido(true);
  };

  return (
    <form>
      <TextField
        id="cupom"
        name="cupom"
        label="Cupom"
        value={cupom}
        onChange={(e) => setCupom(e.target.value)}
        fullWidth
      />
      <div className='marg'> 
      <Button variant="contained" onClick={handleAddValidCoupon}>
        Adicionar
      </Button>
      <Button variant="contained" onClick={handleAddInvalidCoupon}>
        Adicionar (Inválido)
      </Button>
      </div>
      {cupomInvalido && (
        <Typography variant="body2" color="error">
          Cupom inválido. Por favor, insira um cupom válido.
        </Typography>
      )}
    </form>
  );
}

export default CouponForm;
