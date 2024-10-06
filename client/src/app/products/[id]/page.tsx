import productApiRequest from '@/apiRequests/product';
import ProductAddForm from '@/app/products/_components/product-add-form';
export default async function ProductEdit({ params }: { params: { id: string } }) {
    let product = undefined;
    try {
        const { payload } = await productApiRequest.getDetail(Number(params.id));
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
