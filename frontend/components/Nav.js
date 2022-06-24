import Link from "next/link";
import { FiShoppingBag } from "react-icons/fi";
import { NavContainer, NavItems, NavTotal } from "../ui/NavUi";
import Cart from "./Cart";
import { useStateContext } from "../lib/context";

const {AnimatePresence} = require('framer-motion');

export default function Nav() {

    const {showCart, setShowCart, totalQty } = useStateContext();
    return (
        <NavContainer>
            <Link href={'/'}>
                Logo.
            </Link>
            <NavItems>
                <div onClick={() => setShowCart(true)}>
                    {totalQty > 0 && 
                        <NavTotal
                            animate={{scale: 1}}
                            initial={{scale: 0}}
                        >
                            {totalQty}
                        </NavTotal>
                    }
                    <FiShoppingBag />
                    <h3>Cart</h3>
                </div>
                <AnimatePresence>
                    {showCart && <Cart />}       
                </AnimatePresence>
            </NavItems>
        </NavContainer>
    )
}