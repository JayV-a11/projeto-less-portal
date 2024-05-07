'use client'    
import { Button } from "@mui/material";
import './cartList.css';
import { useAppDispatch, useAppSelector } from "@/lib/store";
import { addItem, removeItem } from "@/lib/products/productSlice";

export default function CArtList() {
    const products = useAppSelector((state) => state.product.products);
    const dispatch = useAppDispatch();
    return (
        products.length > 0 ? <div>
            {products.map((item, index) =>    
                <div  key={index} className="cart">
                    {item.name}
                    <div className="foto">
                        <img alt="ft" src="https://m.media-amazon.com/images/I/91Z6ApocmwL._AC_UF1000,1000_QL80_.jpg" />
                    </div>
                    <div className="options">
                        <span className="price">
                            {item.price}
                        </span>
                        <Button onClick={() => dispatch(removeItem({}))} variant="contained">Remover</Button>
                    </div>
                </div>
            )}
            </div>
        : 
        <h2>Nenhum produto selecionado</h2>
        
    )
}