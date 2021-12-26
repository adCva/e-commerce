import styled from "styled-components";



export const HeroTextContainer = styled.div`
    align-self: flex-start;
    padding: 1rem;
    font-family: var(--font-family);
    margin-top: 0.7rem;

    @media screen and (min-width: 768px) {
        margin-top: 2rem;
    }

    @media screen and (min-width: 1024px) {
        width: 70%;
        align-self: center;
    }
    @media screen and (min-width: 1025px) {
        margin-top: 0;
    }
`


export const CompanyName = styled.h5`
    text-transform: uppercase;
    color: var(--orange);
    font-size: 0.75rem;
    letter-spacing: 0.7px;

    @media screen and (min-width: 768px) {
        font-size: 0.95rem;
    }

    @media screen and (min-width: 1024px) {
        font-size: 0.87rem;
    }
`


export const ProductName = styled.h1`
    color: var(--very-dark-blue);
    margin: 0.7rem 0 1.2rem 0;
    font-size: 1.75rem;
    font-weight: var(--font-weight-bold);
    letter-spacing: 0.7px;
    line-height: 1.2;

    @media screen and (min-width: 768px) {
        font-size: 2.3rem;
    }
`


export const ProductDescription = styled.p`
    color: var(--dark-grayish-blue);
    line-height: 1.5;

    @media screen and (min-width: 768px) {
        font-size: 1.3rem;
    }

    @media screen and (min-width: 1024px) {
        font-size: 1.1rem;
    }
`


export const ProductPriceWrapper = styled.div`
    margin: 1rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (min-width: 768px) {
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        margin: 2rem 0;
    }

    @media screen and (min-width: 1024px) {
        margin: 1rem 0;
    }
`


export const RunThroughtTheJungle = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
`


export const ProductActivePrice = styled.p`
    color: var(--very-dark-blue);
    font-weight: var(--font-weight-bold);
    font-size: 1.6rem;

    @media screen and (min-width: 768px) {
        font-size: 2rem;
    }

    @media screen and (min-width: 1024px) {
        font-size: 1.7rem;
    }
`


export const ProductActiveDiscount = styled.p`
    background-color: #ffdcc2;
    color: var(--orange);
    font-weight: var(--font-weight-bold);
    padding: 0.2rem 0.3rem;
    border-radius: 5px;
    margin-left: 1.3rem;
    font-size: 0.9rem;

    @media screen and (min-width: 768px) {
        font-size: 1.05rem;
    }
`


export const ProductNormalPrice = styled.p`
    color: var(--grayish-blue);
    font-weight: var(--font-weight-bold);
    text-decoration-line: line-through;

    @media screen and (min-width: 768px) {
        font-size: 1.2rem;
        margin-top: 0.6rem;
    }
`


export const AddToCartWrapper = styled.div`
    width: 90%;
    margin: 0 auto;

    @media only screen and (min-width: 768px) {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    @media only screen and (min-width: 1024px) {
        margin: 0;
    }
`


export const QuantityWrapper = styled.div`
    background-color: #f7f8fd;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 2rem 0;

    @media only screen and (min-width: 768px) {
        margin-right: 2rem;
    }

    @media screen and (min-width: 1024px) {
        width: 65%;
    }
`


export const MinusBtn = styled.button`
    cursor: pointer;
    color: var(--orange);
    border: none;
    outline: none;
    font-weight: var(--font-weight-bold);
    font-size: 1.5rem;
    background: transparent;
    padding: 0.6rem 0;
    transition: var(--text-transition);

    :hover {
        background-color: #f9e3d1;
    }
    :focus {
        background-color: #f9e3d1;
    }
`

export const ActiveQuantity = styled.p`
    text-align: center;
    font-weight: var(--font-weight-bold);
`


export const PlusBtn = styled.button`
    cursor: pointer;
    color: var(--orange);
    border: none;
    outline: none;
    font-weight: var(--font-weight-bold);
    font-size: 1.5rem;
    background: transparent;
    padding: 0.6rem 0;
    transition: var(--text-transition);

    :hover {
        background-color: #f9e3d1;
    }
    :focus {
        background-color: #f9e3d1;
    }
`


export const AddToCartButton = styled.button`
    background-color: var(--orange);
    color: #f0f0f0;
    border: none;
    outline: none;
    border-radius: 5px;
    width: 100%;
    padding: 0.9rem 0;
    font-weight: var(--font-weight-bold);
    font-size: 0.9rem;
    cursor: pointer;
    transition: var(--text-transition);
    box-shadow: rgba(255, 125, 26, 0.25) 0px 14px 28px, rgba(255, 125, 26, 0.22) 0px 10px 10px;

    :hover {
        background-color: var(--hover-orange);
    }

    :focus {
        background-color: var(--hover-orange);
    }
`