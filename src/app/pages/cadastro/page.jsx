"use client";
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './styles.css';

function CustomerForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:8080/costumer', {
        name: name,
        email: email,
        inactive: false,
      });

      if (response.status !== 500 && response.status !== 400) {
        toast.success('Cliente cadastrado com sucesso!');
        // Limpar os campos após o cadastro
        setName('');
        setEmail('');
      } else {
        toast.error('Ocorreu um erro ao cadastrar o cliente. Por favor, tente novamente.');
      }
    } catch (error) {
      console.error('Erro:', error);
      toast.error('Ocorreu um erro ao cadastrar o cliente. Por favor, tente novamente.');
    }
  };

  return (
    <div className='form'>
        <Grid item xs={4}>
          <TextField
            id="name"
            name="name"
            label="Nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            id="email"
            name="email"
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={4}>
          <Button variant="contained" onClick={handleSubmit}>
            Cadastrar
          </Button>
        </Grid>
      <ToastContainer />
    </div>
  );
}

export default CustomerForm;
