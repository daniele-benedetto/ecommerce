import styled from "styled-components";

export const CartContainer = styled.span`
    position:fixed;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.4);
    z-index: 999;
    display: flex;
    justify-content: flex-end;
    margin: 0;
`;

export const CartMenu = styled.div`
    width: 40%;
    background-color: #f1f1f1;
    padding: 2rem 5rem;
    overflow-x: scroll;
    position: relative;
`;

export const CartCard = styled.span`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 1rem;
    background: white;
    padding: 2rem;
    margin: 2rem 0;
    img {
        width: 8rem;
    }
`;

export const CardInfo = styled.span`
    width: 50%;
`;

export const CartEmpty = styled.div`
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, 0);
    display: flex; 
    flex-direction: column;
    width: 100%;
    height: 100vh;
    align-items: center;
    justify-content: center;
    svg {
        font-size: 10rem!important;
        color: var(--secondary);
    }
    h1 {
        font-size: 2rem;
        padding: 2rem;
    }
`;

export const CartQuantity = styled.span`

`;