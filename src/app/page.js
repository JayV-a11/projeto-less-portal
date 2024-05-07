"use client";
import styles from "./page.module.css";
import Card from "./components/Card";
import './styles.css';
import ReduxProvider from "./storeProvider";
import Header from "./components/Header";
import { useRouter } from 'next/navigation'

export default function Home() {
  
  const livros = [
    {
        name: "O Senhor dos Anéis: A Sociedade do Anel",
        price: "R$ 45,90"
    },
    {
        name: "Harry Potter e a Pedra Filosofal",
        price: "R$ 39,99"
    },
    {
        name: "Cem Anos de Solidão",
        price: "R$ 55,00"
    },
    {
        name: "1984",
        price: "R$ 29,80"
    },
    {
      name: "O Senhor dos Anéis: A Sociedade do Anel",
      price: "R$ 45,90"
  },
  {
      name: "Harry Potter e a Pedra Filosofal",
      price: "R$ 39,99"
  },
  {
      name: "Cem Anos de Solidão",
      price: "R$ 55,00"
  },
  {
      name: "1984",
      price: "R$ 29,80"
  },
  {
    name: "O Senhor dos Anéis: A Sociedade do Anel",
    price: "R$ 45,90"
},
{
    name: "Harry Potter e a Pedra Filosofal",
    price: "R$ 39,99"
},
{
    name: "Cem Anos de Solidão",
    price: "R$ 55,00"
},
{
    name: "1984",
    price: "R$ 29,80"
}
];



  return (
    <ReduxProvider>

      <main className={styles.main}>
        <Header />
        <div className="cards">
        {livros.map((item,index) => <Card key={index} name={item.name} price={item.price} />)}
        </div>
      </main>
      </ReduxProvider>

  );
}
