import React from 'react';
import LoginForm from "../components/organism/LoginForm";
import PasswordResetForm from "../components/organism/PasswordResetForm";

const Products: React.FC = () => {
    return (
        <div className="container mx-auto p-4">
            <LoginForm/>
            <PasswordResetForm/>
        </div>
    );
};
export default Products;
