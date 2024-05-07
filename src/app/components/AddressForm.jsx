import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import axios from 'axios';

const estados = [
  { value: 'SP', label: 'São Paulo' },
  { value: 'RJ', label: 'Rio de Janeiro' },
  { value: 'MG', label: 'Minas Gerais' },
  { value: 'RS', label: 'Rio Grande do Sul' },
];

function AddressForm() {
  const [cep, setCep] = useState('');
  const [rua, setRua] = useState('');
  const [numero, setNumero] = useState('');
  const [complemento, setComplemento] = useState('');
  const [bairro, setBairro] = useState('');
  const [estado, setEstado] = useState('');
  const [valorFrete, setValorFrete] = useState('');
  const [addresses, setAddresses] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState('');

  const handleChange = (event) => {
    setEstado(event.target.value);
  };

  const gerarValorFrete = () => {
    const valorAleatorio = (Math.random() * 100).toFixed(2);
    setValorFrete(valorAleatorio);
  };

  useEffect(() => {
    if (cep && rua && numero && bairro && estado) {
      gerarValorFrete();
    }
  }, [cep, rua, numero, bairro, estado]);

  useEffect(() => {
    async function fetchAddresses() {
      try {
        const response = await axios.get('http://localhost:8080/address?customer_id=7b332040-5654-4933-8ac2-61b44f9572b8');
        setAddresses(response.data);
      } catch (error) {
        console.error('Erro ao buscar endereços:', error);
      }
    }
    fetchAddresses();
  }, []);

  const handleAddressSelection = (address) => {
    setSelectedAddress(address);
  };

  const handleAddNewAddress = async () => {
    try {
      await axios.post('http://localhost:8080/address', {
        customer_id: '7b332040-5654-4933-8ac2-61b44f9572b8',
        cep: cep,
        rua: rua,
        numero: numero,
        bairro: bairro,
        cidade: 'Cidade', // Supondo que a cidade seja fixa por enquanto
        estado: estado,
      });
      // Limpar os campos após adicionar o novo endereço
      setCep('');
      setRua('');
      setNumero('');
      setComplemento('');
      setBairro('');
      setEstado('');
      setValorFrete('');
      // Recarregar a lista de endereços
      const response = await axios.get('http://localhost:8080/address?customer_id=7b332040-5654-4933-8ac2-61b44f9572b8');
      setAddresses(response.data);
    } catch (error) {
      console.error('Erro ao adicionar endereço:', error);
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
                label="Selecione um endereço"
                value={selectedAddress}
                onChange={(e) => setSelectedAddress(e.target.value)}
                fullWidth
              >
                {addresses.map((address, index) => (
                  <MenuItem key={index} value={address}>
                    {address.cep}, {address.rua}, {address.numero}, {address.bairro}, {address.estado}
                  </MenuItem>
                ))}
              </TextField>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="cep"
              name="cep"
              label="CEP"
              value={cep}
              onChange={(e) => setCep(e.target.value)}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="rua"
              name="rua"
              label="Rua"
              value={rua}
              onChange={(e) => setRua(e.target.value)}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="numero"
              name="numero"
              label="Número"
              value={numero}
              onChange={(e) => setNumero(e.target.value)}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="complemento"
              name="complemento"
              label="Complemento"
              value={complemento}
              onChange={(e) => setComplemento(e.target.value)}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="bairro"
              name="bairro"
              label="Bairro"
              value={bairro}
              onChange={(e) => setBairro(e.target.value)}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <TextField
                required
                id="estado"
                name="estado"
                select
                label="Estado"
                value={estado}
                onChange={handleChange}
                fullWidth
              >
                {estados.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="valor-frete"
              name="valor-frete"
              label="Valor do Frete"
              value={valorFrete}
              disabled
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" onClick={handleAddNewAddress}>
              Adicionar Novo Endereço
            </Button>
          </Grid>
        </Grid>
      </form>
     
      <h3>Endereço Selecionado:</h3>
      {selectedAddress && (
        <div>
          <p>CEP: {selectedAddress.cep}</p>
          <p>Rua: {selectedAddress.rua}</p>
          <p>Número: {selectedAddress.numero}</p>
          <p>Bairro: {selectedAddress.bairro}</p>
          <p>Estado: {selectedAddress.estado}</p>
        </div>
      )}
    </div>
  );
}

export default AddressForm;
