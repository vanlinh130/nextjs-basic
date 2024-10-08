import productApiRequest from '@/apiRequests/product';
import ProductAddForm from '@/app/products/_components/product-add-form';
import { Metadata, ResolvingMetadata } from 'next';
import { cache } from 'react';

const getDetail = cache(productApiRequest.getDetail);

type Props = {
    params: { id: string };
    searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params, searchParams }: Props, parent: ResolvingMetadata): Promise<Metadata> {
    // fetch data
    const { payload } = await getDetail(Number(params.id));
    const product = payload.data;

    return {
        title: 'Edit sản phẩm: ' + product.name,
        description: product.description,
    };
}

export default async function ProductEdit({ params, searchParams }: Props) {
    let product = undefined;
    try {
        const { payload } = await getDetail(Number(params.id));
        product = payload.data;
    } catch (error) {}
    return (
        <div className="flex items-center justify-center">
            <div className="w-[40%]">
                <h1 className="text-[24px] font-bold text-center py-2">Cập nhật sản phẩm</h1>
                {!product && <div>Không tìm thấy sản phẩm</div>}
                {product && <ProductAddForm product={product} />}
            </div>
        </div>
    );
}
