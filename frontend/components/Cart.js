import { useStateContext } from '../lib/context';
import { 
    CardInfo, 
    CartCard, 
    CartContainer, 
    CartEmpty, 
    CartMenu, 
    CartQuantity,
} from '../ui/CartUi';
import { AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai';
import { FaShoppingCart } from 'react-icons/fa';

export default function Cart() {

    const { cartItems } = useStateContext();

    return(
        <CartContainer>
            <CartMenu>
                {cartItems.length < 1 && (
                    <CartEmpty>
                        <h1>You have more shopping to do</h1>
                        <FaShoppingCart />
                    </CartEmpty>
                )}
                {cartItems.length >=1 
                    && cartItems.map((item) => {
                        return(
                            <CartCard>
                                <img src={item.image.data.attributes.formats.small.url} alt={item.title} />
                                <CardInfo>
                                    <h3>{item.title}</h3>
                                    <h4>{item.price}</h4>
                                    <CartQuantity>
                                        <span>Quantity</span>
                                        <button><AiFillMinusCircle /></button>
                                        <p>{item.quantity}</p>
                                        <button><AiFillPlusCircle /></button>
                                    </CartQuantity>
                                </CardInfo>
                            </CartCard>
                        )
                    })
                }
            </CartMenu>
        </CartContainer>
    )
}