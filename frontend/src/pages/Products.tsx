import React from 'react';
import ProductList from '../components/organism/ProductList';
import AddProductForm from "../components/organism/AddProductForm";

const Products: React.FC = () => {
    return (
        <div className="container mx-auto p-4">
            <AddProductForm/>
            <ProductList/>
        </div>
    );
};
export default Products;
