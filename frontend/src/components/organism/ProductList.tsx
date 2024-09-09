import React, {useEffect, useState} from 'react';
import api from '../../adapters/api/api'; // Make sure to configure Axios in adapters/api.ts
import ProductCard from '../molecules/ProductCard';

// Define the shape of a product
interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
}

// ProductList component
const ProductList: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);  // Use the Product[] type for the state

    // Fetch products from the API
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await api.get<Product[]>('/products/');  // Type the Axios response
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

    return (
        <>
            <h1 className="text-2xl font-bold mb-4">Products</h1>
            <div className="grid grid-cols-3 gap-4">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product}/>
                ))}
            </div>
        </>
    );
};

export default ProductList;
