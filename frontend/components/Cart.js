import { useStateContext } from '../lib/context';
import { 
    CardInfo, 
    CartCard, 
    CartCheckout, 
    CartContainer, 
    CartEmpty, 
    CartMenu, 
    CartQuantity,
} from '../ui/CartUi';
import { AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai';
import { FaShoppingCart } from 'react-icons/fa';

export default function Cart() {

    const { 
        cartItems, 
        setShowCart, 
        onAdd, 
        onRemove,
        totalPrice,
    } = useStateContext();

    return(
        <CartContainer onClick={() => setShowCart(false)}>
            <CartMenu onClick={(e) => e.stopPropagation()}>
                {cartItems.length < 1 && (
                    <CartEmpty>
                        <h1>You have more shopping to do</h1>
                        <FaShoppingCart />
                    </CartEmpty>
                )}
                {cartItems.length >=1 
                    && cartItems.map((item) => {
                        return(
                            <CartCard key={item.slug}>
                                <img src={item.image.data.attributes.formats.small.url} alt={item.title} />
                                <CardInfo>
                                    <h3>{item.title}</h3>
                                    <h4>{item.price}$</h4>
                                    <CartQuantity>
                                        <span>Quantity</span>
                                        <button onClick={() => onRemove(item)}><AiFillMinusCircle /></button>
                                        <p>{item.quantity}</p>
                                        <button onClick={() => onAdd(item, 1)}><AiFillPlusCircle /></button>
                                    </CartQuantity>
                                </CardInfo>
                            </CartCard>
                        )
                    })
                }
                {cartItems.length >= 1 && (
                    <CartCheckout>
                        <h3>Subtotal: {totalPrice}$</h3>
                        <button>Purchase</button>
                    </CartCheckout>
                )}
            </CartMenu>
        </CartContainer>
    )
}