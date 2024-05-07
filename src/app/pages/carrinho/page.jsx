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

  return (
    <ReduxProvider>
        <Header />

      <main>
      <div className="forms">
      <h3>Endereço de entrega</h3>
      <AddressForm />
      <h3>Forma de pagamento</h3>
      <CreditCardForm />
      <h3>Adicionar Cupom de desconto</h3>
      <CouponForm />
      </div>
      <div className="products">
        <CArtList/>
        <Button variant="contained" onClick={() => window.alert('Compra finalizada com sucesso!')}>
       Finalizar compra
      </Button>
      </div>
      </main>
    </ReduxProvider>
  );
}
