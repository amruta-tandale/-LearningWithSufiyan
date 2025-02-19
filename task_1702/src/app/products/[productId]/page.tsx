import { Metadata } from "next";

type Props = {
    params: {
        productId: string;
    }
}

export const generateMetadata = async ({
    params,
}: Props): Promise<Metadata> => {
    const title = await new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Fake Store Product ${params.productId}`);
        }, 100);
    });
    return {
        title: `Product Details - ${title}`,
    };
};

export default function ProductId({ params }: Props) {
    return (
        <div>
            <h1>Product Details</h1>
            <h2>Product ID: {params.productId}</h2>
            <p>Description: Placeholder description for product {params.productId}.</p>
            <p>Price: $XX.XX</p>
            <p>Category: Placeholder Category</p>
        </div>
    );
}

