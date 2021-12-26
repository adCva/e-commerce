import styled from "styled-components";


export const HeroContainer = styled.div`
    width: 100%;
    margin: 0 auto 3rem auto;


    @media screen and (min-width: 768px) {
        width: min(70%, 1200px);
        margin: 3rem auto;
    }

    @media screen and (min-width: 1025px) {
        display: grid;
        grid-template-columns: 1.1fr 2fr;
        grid-gap: 2rem;
    }

    @media screen and (min-width: 1224px) {
        grid-gap: 6rem;
    }
`