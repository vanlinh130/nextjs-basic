import ProductAddForm from '@/app/products/add/product-add-form';
import React from 'react';

export default function ProductAddPage() {
    return (
        <div className="flex items-center justify-center">
            <div className="w-[40%]">
                <h1 className="text-[24px] font-bold text-center py-2">Thêm sản phẩm</h1>
                <ProductAddForm />
            </div>
        </div>
    );
}
