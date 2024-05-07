"use client";
import './styles.css';
import AddressForm from "@/app/components/AddressForm";
import CArtList from '@/app/components/CartList';
import CreditCardForm from "@/app/components/CreditCardForm";
import CouponForm from '@/app/components/CupomForm';
import Header from '@/app/components/Header';
import ReduxProvider from "@/app/storeProvider";
import { Button } from '@mui/material';

export default function admdevolucoes() {
    const compras = [
        {
            produto: "Dom Casmurro (1)",
            price: "R$ 42,50",
            date: "19 de março de 2024",
            status: 'Pendente envio'
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
            status: 'Pendente envio',
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
            status: 'Reembolso',
        }
    ];

    const handleAskForRefund = () => {
        if(confirm('deseja aprovar a solicitação de reembolso?') === true) {
            window.alert('O cupom de troca foi enviado para o comprador')
        } else {
            console.log('desaprovou, o bonito')
        }
    }

    const handleSend = () => {
        if(confirm('deseja confirmar o envio desse produto?') === true) {
            window.alert('Confirmação realizada com sucesso! O comprador será notificado')
        } else {
            console.log('ihhh, o bonito')
        }
    }
  return (
    <ReduxProvider>
      <main>
        <div className='list'>
        {compras.map((item, index) => 
            <div key={index} className='buyedItem'>
            <span className='pessoa'>{'Carlinhos'}</span>
            <span className='produtos'>{item.produto}</span>
            <span className='data'>{item.date}</span>
            <span className='price'>{item.price}</span>
            <span className='status'>{item.status}</span>
            <div className='opt'>
                {item.status === 'Reembolso' && <Button variant="contained" onClick={() => handleAskForRefund()}>
                    Validar reembolso
                </Button> }
                {item.status === 'Pendente envio' && <Button variant="contained" onClick={() => handleSend()}>
                    Confirmar envio
                </Button> }    
            </div>
            </div>
        )}
        </div>
      </main>
    </ReduxProvider>
  );
}
