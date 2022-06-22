import styled from "styled-components";

export const NavContainer = styled.nav`
    min-height: 15vh;
    display: flex; 
    justify-content: space-between;
    align-items: center;
    font-size: 1rem;
    a {
        font-size: 1.5rem;
        font-weight: bold;
    }
`;

export const NavItems = styled.div`
    dispaly: flex;
    justify-content: space-around;
    align-items: center;
    div {
        position: relative;
        margin-left: 3rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        h3 {
            font-size: 1rem;
            padding: 0.25rem;
        }
        svg{
            font-size: 1.5rem;
        }
    }

`;