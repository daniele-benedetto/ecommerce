import { useQuery } from "urql";

import { useRouter } from 'next/router';

import { GET_PRODUCT_QUERY } from '../../lib/query';

import { 
    ProductContainerUi, 
    ProductInfoUi,
    ProductQuantityUi,
    ProductButtonUi,
} from '../../ui/ProductDetailUi'

import { AiFillPlusCircle, AiFillMinusCircle} from 'react-icons/ai';

export default function ProductDetails(){

    const { query } = useRouter();

    const [results] = useQuery({
        query: GET_PRODUCT_QUERY,
        variables: {
            slug: query.slug
        }
    });

    const {data, fetching, error} = results;

    if(fetching) return <p>Loading...</p>;
    if(error) return <p>Error... {error.message}</p>;

    const { title, description, image } = data.products.data[0].attributes;

    return (
        <ProductContainerUi>
            <img src={image.data.attributes.formats.medium.url} alt={title}/>
            <ProductInfoUi>
                <h3>{title}</h3>
                <p>{description}</p>
                <ProductQuantityUi>
                    <span>Quantity</span>
                    <button><AiFillMinusCircle /></button>
                    <p>0</p>
                    <button><AiFillPlusCircle /></button>
                </ProductQuantityUi>
                <ProductButtonUi>Add to cart</ProductButtonUi>
            </ProductInfoUi>
        </ProductContainerUi>
    )
};