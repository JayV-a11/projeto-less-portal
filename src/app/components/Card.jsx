'use client'    
import { Button } from "@mui/material";
import './card.css';
import { useAppDispatch, useAppSelector } from "@/lib/store";
import { addItem } from "@/lib/products/productSlice";

export default function Card({
    name,
    price
}) {
    const products = useAppSelector((state) => state.product.products);
    const dispatch = useAppDispatch();
    return (
        <div className="card">
            {name}
            <div className="foto">
                <img alt="ft" src="https://m.media-amazon.com/images/I/91Z6ApocmwL._AC_UF1000,1000_QL80_.jpg" />
            </div>
            <div className="options">
                <span className="price">
                    {price}
                </span>
                <Button onClick={() => {
                    dispatch(addItem({name, price, quantity: 1}))
                    window.alert("Produto adicionado com sucesso");
                }} variant="contained">Adicionar ao carrinho</Button>
            </div>
        </div>
    )
}