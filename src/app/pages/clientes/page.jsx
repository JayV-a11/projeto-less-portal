"use client";
import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import axios from 'axios';
import { DataGrid } from '@mui/x-data-grid';

function CustomerGrid() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    async function fetchCustomers() {
      try {
        const response = await axios.get('http://localhost:8080/costumer');
        console.log(response, 'teste')
        setCustomers(response.data);
      } catch (error) {
        console.error('Erro ao buscar clientes:', error);
      }
    }
    fetchCustomers();
  }, []);

  const handleInactivate = async (customer) => {
    try {
        const customerID = customer.id;
      await axios.patch('http://localhost:8080/costumer', {
        id: customer.id,
        name: customer.name,
        email: customer.email,
        inactive: true,
      });
      // Atualizar a lista de clientes após inativação
      const updatedCustomers = customers.map((customer) =>
        customer.id === customerID ? { ...customer, inactive: true } : customer
      );
      setCustomers(updatedCustomers);
    } catch (error) {
      console.error('Erro ao inativar cliente:', error);
    }
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 200 },
    { field: 'name', headerName: 'Nome', width: 200 },
    { field: 'email', headerName: 'Email', width: 300 },
    {
      field: 'inactive',
      headerName: 'Inativo',
      width: 150,
      renderCell: (params) => (
        <Button
          variant="contained"
          color="secondary"
          disabled={params.row.inactive}
          onClick={() => handleInactivate(params.row)}
        >
          Inativar
        </Button>
      ),
    },
  ];
console.log(customers)
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={customers}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5, 10, 20]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}

export default CustomerGrid;
