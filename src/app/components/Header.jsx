 'use client'
 import { useAppSelector } from "@/lib/store";
import './header.css';
import { useRouter } from "next/navigation";
export default function Header() {
    const router = useRouter();
  const products = useAppSelector((state) => state.product.products);

    return (
        <header className="header">
          <span onClick={() => router.push('/')}>Produtos</span>
          <span onClick={() => router.push('/pages/devolucoes')}>Pedidos</span>
          <span onClick={() => router.push('/pages/carrinho')}>Carrinho {products.length > 0 && `(${products.length})`}</span>
        </header>
    )
}