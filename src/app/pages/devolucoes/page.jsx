"use client";
import './styles.css';
import AddressForm from "@/app/components/AddressForm";
import CArtList from '@/app/components/CartList';
import CreditCardForm from "@/app/components/CreditCardForm";
import CouponForm from '@/app/components/CupomForm';
import Header from '@/app/components/Header';
import ReduxProvider from "@/app/storeProvider";
import { Button } from '@mui/material';

export default function Carrinho() {
    const compras = [
        {
            produto: "Dom Casmurro (1)",
            price: "R$ 42,50",
            date: "19 de março de 2024",
            status: 'Em andamento'
        },
        {
            produto: "Orgulho e Preconceito (2), O Pequeno Príncipe (1)",
            price: "R$ 89,70",
            date: "19 de março de 2024",
            status: 'Entegue',
        },
        {
            produto: "A Revolução dos Bichos (5)",
            price: "R$ 98,75",
            date: "19 de março de 2024",
            status: 'Entegue',
        },
        {
            produto: "Dom Casmurro (1)",
            price: "R$ 42,50",
            date: "19 de março de 2024",
            status: 'Entegue',
        },
        {
            produto: "Orgulho e Preconceito (2), O Pequeno Príncipe (1)",
            price: "R$ 89,70",
            date: "19 de março de 2024",
            status: 'Cancelado',
        },
        {
            produto: "A Revolução dos Bichos (5)",
            price: "R$ 98,75",
            date: "19 de março de 2024",
            status: 'Devolvido',
        }
    ];

    const handleAskForRefund = () => {
        if(confirm('deseja solicitar o reembolso da troca?') === true) {
            window.alert('Sua solicitação de reembolso foi gerada')
        } else {
            console.log('cancelou, o bonito')
        }
    }
  return (
    <ReduxProvider>
        <Header />

      <main>
        <div className='list'>
        {compras.map((item, index) => <div key={index} className='buyedItem'>
            <span className='produtos'>{item.produto}</span>
            <span className='data'>{item.date}</span>
            <span className='price'>{item.price}</span>
            <span className='status'>{item.status}</span>
            {item.status !== 'Devolvido' && item.status !== 'Cancelado' ? <Button variant="contained" onClick={() => handleAskForRefund()}>
       Pedir reembolso
      </Button> : <div className="space"></div> }
        </div>)}
        </div>
      </main>
    </ReduxProvider>
  );
}
