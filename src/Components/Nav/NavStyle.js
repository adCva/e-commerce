import styled from "styled-components";

export const NavContainer = styled.div`
    width: min(100%, 1200px);
    border-bottom: 1px solid var(--grayish-blue);
    margin: 0 auto;
    padding: 1em;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (min-width: 769px) {
        padding: 0 0.2rem;
    }
`