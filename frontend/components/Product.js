import { ProductUi } from "../ui/ProductUi";

export default function Product({product}){

    const {title, price, image} = product.attributes;
    return (
        <ProductUi>
            <div>
                <img src={image.data.attributes.formats.small.url} alt={title} />
            </div>
            <h2>{title}</h2>
            <h3>{price}</h3>
        </ProductUi>
    )
}