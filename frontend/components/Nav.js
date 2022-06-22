import Link from "next/link";

import { FiShoppingBag } from "react-icons/fi";

import { NavContainer, NavItems } from "../ui/NavUi";

export default function Nav() {
    return (
        <NavContainer>
            <Link href={'/'}>
                Logo.
            </Link>
            <NavItems>
                <div>
                    <FiShoppingBag />
                    <h3>Cart</h3>
                </div>
            </NavItems>
        </NavContainer>
    )
}