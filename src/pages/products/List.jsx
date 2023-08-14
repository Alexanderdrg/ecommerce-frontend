import ProductCard from "../../components/products/ProductCard";
import {useEffect, useState} from "react";

export default function ProductList() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/products/list')
            .then((response) => response.json())
            .then((data) => setProducts(data));
    }, []);

    return (
        <>
            <div className="text-gray-500 h-[90%] px-4 py-4">
                <h1 className="font-bold text-white text-3xl">Products</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
                    {products.map((product) => (
                        <ProductCard key={product.code} {...product} />
                    ))}
                </div>
            </div>
        </>
    )
}