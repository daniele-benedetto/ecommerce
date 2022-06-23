import Link from "next/link";
import { FiShoppingBag } from "react-icons/fi";
import { NavContainer, NavItems, NavTotal } from "../ui/NavUi";
import Cart from "./Cart";
import { useStateContext } from "../lib/context";

export default function Nav() {

    const {showCart, setShowCart, totalQty } = useStateContext();
    return (
        <NavContainer>
            <Link href={'/'}>
                Logo.
            </Link>
            <NavItems>
                <div onClick={() => setShowCart(true)}>
                    {totalQty > 0 && <NavTotal>{totalQty}</NavTotal>}
                    <FiShoppingBag />
                    <h3>Cart</h3>
                </div>
                {showCart && <Cart />}       
            </NavItems>
        </NavContainer>
    )
}